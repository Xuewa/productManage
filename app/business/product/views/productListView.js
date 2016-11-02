/**
 * Created by Administrator on 2016/11/1 0001.
 */
require('../styles/productList.less');
import React from 'react';
import {connect} from 'react-redux';
import {Link,hashHistory} from 'react-router';
import {showProductList,showProductItem} from '../action';

var ProductListView=React.createClass({
    clickHandler:function(prodObj){
        this.props.dispatch(showProductItem(prodObj));
        hashHistory.push("/detail");
    },
    render:function(){
        this.props.dispatch(showProductList());
        var productList=this.props.ProductListReducer.productList;
        console.log(productList);
        var itemArr=[];
        if(productList)
            for(var i=0;i<=productList.length-1;i++){
            var item=productList[i];
            var imgUrl='http://'+item.pic[0].url;
            itemArr.push(
                        <li className="good_item">
                            <a className="box"  onClick={this.clickHandler.bind(this,item)}>
                                <img className="item_img left_col_img" src={imgUrl} />
	                            <div className="right_col">
                                    <div className="row pro_name">{item.name}</div>
                                    <div className="row row4_2 pro_desc">{item.desc}</div>
                                    <div className="row">
                                        <span className="row_td price">￥{item.price}</span>
                                        <span className="row_td sale_num">{item.sold}人购买</span>
                                    </div>
                                </div>
                            </a>
                        </li>
            );
        }
        return(<div id="wrapper" className="good_list" >
                <ul id="good_list">
                {itemArr}
                </ul>
            </div>);
    }
});

function mapStateToProps(state){
    var _props={
        ProductListReducer:state.ProductListReducer
    };
    return _props;
};

module.exports=connect(mapStateToProps)(ProductListView);