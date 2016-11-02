import React from 'react';
import { Router, Route, Link,IndexRoute,hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';   
import ConfigureStore from './base/stores/ConfigureStore';

import ProductListView from "fyBus/product/views/ProductListView";
import ProductItemView from "fyBus/product/views/ProductItemView";

const store = ConfigureStore(); 

var RouterConfig=(
	<Provider store={store} key="provider">
		 <Router history={hashHistory}>
	        <Route path="/" component={ProductListView} />
		 	<Route path="/detail" component={ProductItemView} />
		 </Router>
	</Provider>);

module.exports=RouterConfig;