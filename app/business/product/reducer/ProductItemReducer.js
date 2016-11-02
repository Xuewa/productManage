/**
 * Created by Administrator on 2016/11/1 0001.
 */
import * as types from '../action/ActionTypes';
import CreateReducer from 'fyBase/reducers/CreateReducer';

var initState={
    productItem:null
};

var ProductItemReducer=CreateReducer(initState,{
    //只有展示产品列表的方法
    [types.SHOW_PRODUCTITEM](state,action){
        console.log(action.productItem);

        var _state=Object.assign(initState,{productItem:action.productItem});
        //console.log(_state);
        return _state;
    }
});

module.exports=ProductItemReducer;