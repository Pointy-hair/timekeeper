import angular from 'angular';
import registerMain from './main/index';
import ngStorage from 'ngstorage';

import { combineReducers } from 'redux';
// import loggingMiddleware from './loggingMiddleware';
import ngRedux from 'ng-redux';


const ngModule = angular.module('timelineApp', [ngStorage.name, ngRedux])
	.config(($ngReduxProvider) => {
		let reducer = combineReducers({ test: function(state, action) {
			return state;
		}});
		$ngReduxProvider.createStoreWith(reducer);
	})
	;

registerMain(ngModule);
