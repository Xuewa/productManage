import React from 'react';
import { Router, Route, Link,IndexRoute,hashHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';   
import ConfigureStore from './base/stores/ConfigureStore';

import TrafficLightView from "fyBus/product/productListView";

const store = ConfigureStore(); 

var RouterConfig=(
	<Provider store={store} key="provider">
		 <Router history={hashHistory}>
	        <Route path="/" component={productListView}
	      </Router>
	</Provider>);

module.exports=RouterConfig;