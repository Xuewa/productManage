/**
 * Created by Administrator on 2016/11/1 0001.
 */
import React from 'react';
import {connect} from 'react-redux';
//import {Link,hashHistory} from 'react-router';
//import {showProductList,showProductItem} from '../action';

var ProductItemView=React.createClass({
    render:function(){

        //this.props.dispatch(showProductItem(id));
        var productItem=this.props.ProductItemReducer.productItem;
        //console.log(productItem);
        var imgSrc='http://'+productItem.pic[0].url;
        return(
            <div>
                <div className="imgDiv"><img src={imgSrc} /></div>
                <div className="sub_title_bg">
                    <strong>商品简介</strong>
                </div>
                <div>
                    <p id="good_name" className="good_name">{productItem.name}</p>
                    <p id="good_description">{productItem.desc}</p>
                </div>
                <div className="sub_title_bg">
                    <strong>价格信息</strong>
                </div>
                <div>
                    <div>
                        <label>单价：</label><span></span>
                        <span >￥{productItem.price}</span>
                    </div>
                </div>
            </div>
        );
    },
});

function mapStateToProps(state){
    var _props={
        ProductItemReducer:state.ProductItemReducer
    };
    return _props;
};

module.exports=connect(mapStateToProps)(ProductItemView);
