import BootstrapTimeline from '../../timeline/BootstrapTimeline';
import moment from 'moment';
import { saveToLocaStorage } from '../utils';

export default ngModule => {
	ngModule.component('main', {
		templateUrl: 'app/main/main.html',
		controller: MainController,
	})

}

function MainController ($log, $scope, $localStorage, $window, $ngRedux, CategoriesActions, EntriesActions, CurrentEntryActions) {
	let $ctrl = this;
	let id = 1;
	let chart;
	// let entry;

	const SAVE_DATE_FORMAT = 'YYYY-MM-DD';
	// const SAVED_DATA = 'SAVED_DATA';

	/****************************************
	*      Controller Attributes           *
	****************************************/
	$ctrl.categories = [];
	$ctrl.data;
	$ctrl.times;
	$ctrl.newCategory;
	/****************************************
	*      Controller API                  *
	****************************************/
	$ctrl.addCategory    = addCategory;
	$ctrl.deleteCategory = deleteCategory;
	$ctrl.total          = total;
	/****************************************
	*      Lifecycle Hooks                 *
	****************************************/

	$ctrl.$onInit = function() {
		setupCurrentEntry();
		// $ctrl.categories = entry.categories;
		chart = BootstrapTimeline('.chart')
		// 	.categories(entry.categories.map(catToName))
		// 	.data(entry.data.map(inflate))
			.notifyOnUpdate(function (chart) {
				console.log('chart changes!', chart.data());
				$ngRedux.dispatch(EntriesActions.addEntries($ngRedux.getState().currentEntry, chart.data()));

		// 		// the chart is outside of Angular,
		// 		// so we need to trigger a digest cycle.
				// $scope.$applyAsync(function () {
		//
		// 			$ctrl.times = chart.timesByCategory();
		// 			$ctrl.data = chart.data();
		// 			// sync to local storage
		// 			// entry.data = $ctrl.data;
		// 		});
		// 		// $log.debug(chart.debug());
			});
		// $log.debug('redux state is: ', $ngRedux.getState());
		$ngRedux.subscribe(() => {
			// $log.debug('subscribed to changes!', $ngRedux.getState());
			// chart.categories($ngRedux.getState().categories);
			// $ctrl.categories = $ngRedux.getState().categories;
			// $ctrl.state = $ngRedux.getState();
			// every change should be saved to local storage
			saveToLocaStorage($ngRedux.getState());
		});
		$log.debug('initial state', $ngRedux.getState());
		$ctrl.categories = $ngRedux.getState().categories;
		$ctrl.currentEntry = $ngRedux.getState().currentEntry;
		$ctrl.state = $ngRedux.getState();
        $ngRedux.connect(stateToCtrl, EntriesActions)($ctrl);
        $ctrl.loadEntries();
	};

	$ctrl.$onChanges = function () {}
	$ctrl.$postLink = function () {}
	$ctrl.$onDestroy = function () {}

	/****************************************
	*      API Functions                   *
	****************************************/
	function addCategory(newCategory) {
		if(newCategory){
			$ctrl.newCategory = '';
			document.getElementById('newCategory').focus();
			$ngRedux.dispatch(CategoriesActions.addCategory(newCategory));
		}
	}

	function deleteCategory(category) {
		// $ctrl.categories.splice(index, 1);
		// chart.categories($ctrl.categories.map(catToName));
		// sync to local storage
		// entry.categories = $ctrl.categories;
		$ngRedux.dispatch(CategoriesActions.removeCategory(category));
	}

	function total() {
		let total = 0;
		for(let t in $ctrl.times) {
			total += $ctrl.times[t];
		}
		return total;
	}
	/****************************************
	*      Private Functions               *
	****************************************/
	/**
	 * Look at local storage and setup any saved data that might exist.
	 * If not, create a new entry to save our data
	 * @return {[type]} [description]
	 */
	// function setupSaving() {
	// 	// debugger;
	// 	// delete $localStorage[SAVED_DATA];
	// 	$log.debug('saved data', $localStorage);
	// 	let today = moment().format(SAVE_DATE_FORMAT);
	// 	if(!$localStorage[SAVED_DATA]) {
	// 		$localStorage[SAVED_DATA] = [];
	// 	}
	// 	let allData = $localStorage[SAVED_DATA];
	// 	let found = allData.find(function (d) {
	// 		return d.date === today;
	// 	});
	// 	if(!found){
	// 		found = newEntry(today);
	// 		allData.push(found);
	// 	}
	// 	return found;
	// }
	function stateToCtrl(state) {
	    return {
            entries : state.entries,
            currentEntry : state.currentEntry,
			state,
        };
	}
	let setupCurrentEntry = () => {
		const currentEntry = $ngRedux.getState().currentEntry;
		if(!moment().isSame(moment(currentEntry, SAVE_DATE_FORMAT), 'day')) {
			$ngRedux.dispatch(CurrentEntryActions.setCurrentEntry(moment().format(SAVE_DATE_FORMAT)));
		}
	}

	function newEntry(date, categories) {
		categories = categories || DEFAULT_CATEGORIES;
		return {
			date: date,
			categories: categories,
			data: []
		};
	}

	function catToName(d) {
		return d.category;
	}
	/**
	 * Inflate the date object from a string (local storage) to a date object
	 * @param  {[type]} d [description]
	 * @return {[type]}   [description]
	 */
	function inflate(d){
		d.time = new Date(d.time);
		return d;
	}
}
