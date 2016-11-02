/**
 *
 * 本页面是用于建立ProductIndex页面所需要用到的相关数据模型以及相应数据操作
 * 也是redux的 Reducer
 */
import * as types from '../action/ActionTypes';
import CreateReducer from 'fyBase/reducers/CreateReducer';

var initState={
    productList:null
};

var ProductListReducer=CreateReducer(initState,{
    //只有展示产品列表的方法
    [types.SHOW_PRODUCTLIST](state,action){
        //console.log(action.productList);

        var _state=Object.assign(initState,{productList:action.productList});
        //console.log(_state);
        return _state;
    }
});

module.exports=ProductListReducer;