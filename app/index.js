import angular from 'angular';
import registerMain from './main/index';
import ngStorage from 'ngstorage';

import { combineReducers } from 'redux';
// import loggingMiddleware from './loggingMiddleware';
import ngRedux from 'ng-redux';
import { categories } from './main/categories.state';

const ngModule = angular.module('timelineApp', [ngStorage.name, ngRedux])
	.config( $ngReduxProvider => {
		let reducer = combineReducers({
			categories
		});
		$ngReduxProvider.createStoreWith(reducer, [], []);
	});

registerMain(ngModule);
