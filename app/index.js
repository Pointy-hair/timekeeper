import angular from 'angular';
import registerMain from './main/index';
import ngStorage from 'ngstorage';

import { combineReducers, applyMiddleware } from 'redux';
// import loggingMiddleware from './loggingMiddleware';
import thunk from 'redux-thunk';

import ngRedux from 'ng-redux';
import { categories, CategoriesActions } from './state/categories.state';
import { entries, EntriesActions } from './state/entries.state';
import { currentEntry, CurrentEntryActions } from './state/currentEntry.state';



const ngModule = angular.module('timelineApp', [ngStorage.name, ngRedux])
	.config( $ngReduxProvider => {
		let reducer = combineReducers({
			entries,
			currentEntry
		});
		$ngReduxProvider.createStoreWith(reducer,
            [thunk],
            [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()]);
	})
	.factory('CategoriesActions', CategoriesActions)
	.factory('EntriesActions', EntriesActions)
	.factory('CurrentEntryActions', CurrentEntryActions);

registerMain(ngModule);
