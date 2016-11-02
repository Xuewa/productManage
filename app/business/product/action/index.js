/**
 * Created by Administrator on 2016/11/1 0001.
 */
import * as types from './ActionTypes.js';
import data from './Data.json';
import $ from 'jquery';

/**
 *ת��add action
 * */
export function addProductItem(proItem){
    return (dispatch,getState)=>{
        dispatch({
            type:types.ADD_PRODUCTITEM,
            proItem:proItem
        });
    };
}

/**
 *ת��delete action
 * */
export function deleteProductItem(id){
    return (dispatch,getState)=>{
        dispatch({
            type:types.DELETE_PRODUCTITEM,
            id:id
        });
    };
}

/**
 *ת��show item  action
 * */
export function showProductItemById(id){
    return (dispatch,getState)=>{
        $.ajax({
            url:"...",
            data:{id:id},
            async:false,
            success:function(rs){
                rs=JSON.parse(rs).data;
                dispatch({
                    type:types.SHOW_PRODUCTLISTBYID,
                    productItem:rs
                });
            }
        });

    };
}
/**
 *ת��show item  action
 * */
export function showProductItem(prod){
    return (dispatch,getState)=>{
        console.log(prod);
        dispatch({
            type:types.SHOW_PRODUCTITEM,
            productItem:prod
        });
    };
}

/**
 *转发show list  action
 * */
//export function showProductList(){
//    //console.log(data);
//    return (dispatch,getState)=>{
//        dispatch({
//            type:types.SHOW_PRODUCTLIST,
//            productList:data
//        });
//    };
//}

/**
 *转发ajax show list  action
 * */
export function showProductList(){
    return (dispatch,getState)=>{
        $.ajax({
            url:"http://dywx.dy-pm.com/market-backend//basic/web/index.php?r=goods%2Frecommend",
            data:{page:1,size:10},
            async:false,
            success:function(rs){
                rs=JSON.parse(rs).data;
                dispatch({
                    type:types.SHOW_PRODUCTLIST,
                    productList:rs
                });
            }
        });
    };
}

/**
 *ת��show list  action
 * */
export function updateProductItem(id,proInfo){
    return (dispatch,getState)=>{
        dispatch({
            type:types.UPDATE_PRODUCTITEM,
            id:id,
            proInfo:proInfo
        });
    };
}