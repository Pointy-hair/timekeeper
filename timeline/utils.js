import moment from 'moment';

const CAT_DISPLAY_LENGTH = 10;
/**
 * Cleans the chart data after new entries are inserted.
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function cleanData(data) {
    // debugger;
    return data
        .sort(sortByTime)
        .reduce(removeDupTimes, [])
        .reduce(removeDupCategories, [])
    ;
}

function sortByTime(a,b) {
    let am = moment(a.time), bm = moment(b.time);
    return am.isSameOrBefore(bm) ? -1 : 1;
}

function removeDupTimes(result, d) {
    // find any duplicate times for d
    let foundIndex = result.findIndex(function (elem) {
        return moment(elem.time).isSame(moment(d.time), 'minute');
    });
    // if none found, keep d
    if(foundIndex === -1) {
        result.push(d);
    } else // if d is a newer createdAt time, replace found with d
        if(result[foundIndex].id < d.id) {
        result.splice(foundIndex, 1, d);
    }
    return result;
}

/**
 * Remove any duplicate categories that are next to each other sequentially.
 * The higher key replaces the lower key.
 * @param  {[type]} results [description]
 * @param  {[type]} d       [description]
 * @return {[type]}         [description]
 */
function removeDupCategories(results, d) {
    if(results.length === 0) {
        results.push(d);
        return results;
    }
    // if d category is the same category as the last
    let lastData = results[results.length-1];
    if(d.category === lastData.category) {
        if(d.id > lastData.id){
            results.splice(results.length-1, 1, d);
        }
    } else {
        results.push(d);
    }
    return results;
}

function removeUnknownCategories(data, categories) {
    return data.reduce(function (result, d) {
        if(categories.indexOf(d.category) >= 0) {
            result.push(d)
        }
        return result;
    }, []);
}

/**
 * given pixels inverts it to the nearest 15 minutes as a Date
 * @param  {ind}  x pixels on the chart to convert
 * @return {Date}   Date representing the nearest date to clicked on the x axis.
 */
function invertX(xScale) {
    return function (x) {
        let m = moment(xScale.invert(x));
        m.minutes(Math.round(m.minutes() / 15) * 15).second(0).millisecond(0);
        return m.toDate();
    };
}
/**
 * given pixels inverts it to the nearest category
 * @param  {int}    y pixels on the chart to convert
 * @return {string}   the nearest category
 */
function invertY(yScale) {
    return function (y) {
        let min = Infinity, minData;
        yScale.domain().forEach(function (d) {
            let minDistance = Math.abs(yScale(d) - y);
            if( minDistance < min) {
                min = minDistance;
                minData = d;
            }
        });
        return minData;
    };
}

/**
 * Creates a data structure for our internal data
 * @param  {[type]} time [description]
 * @param  {[type]} category [description]
 * @param  {[type]} i [description]
 * @return {[type]}   [description]
 */
function dataFormat(time, category, id) {
    return {
        time: time,
        category: category,
        id: id
    };
}

function noop() {}

/**
 * Identity accessor for the chart data format.
 * @param  {[type]} d [description]
 * @return {[type]}   [description]
 */
function identity(d) {
    return d.id;
}

/**
 * Closure to check if a click event should update the given domain.
 * @param {int} rightEdge rightEdge to test the x click coords against
 * @param {int} inc       amount to increment by (in minutes)
 * @return function       returns a function that take a domain and click clickCoords
 *                        and will return updated domain or undefined
 */
function addHourAfter(rightEdge, inc) {
    return (domain, clickCoords) => {
        let x = clickCoords[0];
        if(x > rightEdge) {
            let laterTime = moment(domain[1]);
            laterTime.add(inc, 'minutes');
            if(moment(domain[1]).date() !== laterTime.date() ){
                // don't allow the incremented date to go to the next day
                return ;
            }
            return [domain[0], laterTime.toDate()];
        }
        return;
    }
}

function addHourBefore(leftEdge, inc) {
    return (domain, clickCoords) => {
        let x = clickCoords[0];
        if(x < leftEdge) {
            let earlierTime = moment(domain[0]);
            earlierTime.subtract(inc, 'minutes');
            if(moment(domain[0]).date() !== earlierTime.date() ){
                // don't allow the incremented date to go to the next day
                return ;
            }
            return [earlierTime.toDate(), domain[1]];
        }
        return;
    };
}

/**
 * Checks the click coords and returns a datapoint if one is within
 * the target area to be added.
 *
 * @param {[type]} margin     margin of the chart. used to translate
 *                            	the click coords to the correct locations
 * @param {[type]} chartWidth width of the chart. Use with the margin
 *                            to determine the right edge of the click area
 */
function addPoint(margin, chartWidth, invertXScale, invertYScale) {
    return (clickCoords, dataId) => {
        let x = clickCoords[0];
        if(x > margin.left && x < margin.left + chartWidth){
            return dataFormat(invertXScale(clickCoords[0] - margin.left), invertYScale(clickCoords[1] - margin.top), dataId)
        }
        return;
    }
}

function timesByCategory(data) {
    let lastCategory, lastTime;
    let totals = data.reduce((result, d) => {
        if(lastCategory) {
            if(!result[lastCategory]) {
                result[lastCategory] = 0;
            }
            result[lastCategory] += moment(d.time).diff(lastTime, 'minutes');
        }
        lastCategory = d.category;
        lastTime = d.time;
        return result;
    }, {});
    for(let t in totals) {
        totals[t] = minutesToDecimalHours(totals[t]);
    }
    return totals;
}

function minutesToDecimalHours(minutes) {
    return Math.round(minutes / 60 * 100) / 100;
}

function findStartIndex(data) {
    return data.reduce(function(result, d) {
        if(d.id > result){ return d.id;}
        return result;
    }, 0)+1;
}

function formatCategory(d) {
    // debugger;
    return (d.length > CAT_DISPLAY_LENGTH) ? d.substring(0, CAT_DISPLAY_LENGTH) : d;
}

export { cleanData, invertX, invertY, dataFormat, noop, identity, addHourAfter, addHourBefore, addPoint, removeUnknownCategories, timesByCategory, minutesToDecimalHours, findStartIndex, formatCategory};
