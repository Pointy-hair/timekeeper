# Timeline state description

Describes the state shape of the timeline app and all actions.

## State

```js
{

    "entries": {
        byId: {
            "<id>": {
                "id": string
                "categories": [string],
                "data": [{
                    "id": int,
                    "time": timestamp,
                    "category": string,
                }
        },
        allIds: [<id>]
    },
    "currentEntry": <id>,
}
```

## Types
```js
<id> : string in the format 'yyyy-MM-DD' which uniquely identifies each entry
```

## Actions

* ADD_CATEGORY - add a category to the current entry
* DELETE_CATEGORY - remove a category from the current entry
* SAVE_ENTRY_DATA - save data to the current entry
* SET_CURRENT_ENTRY - sets the current entry when the app initializes or when moving forward/backward
* LOAD_ENTRIES - loads the entries from somewhere

## Scenario

1. When the app loads, it should show the current date entry if it exists or create a blank one
1. Categories are just label for each entry (not indexed as this time)
1. I should be able to go to previous or next entries
1. The report should show start time - end time: total duration
    1. It should have a grand total
1. The chart should have a red line at the bottom that's dead (unrecorded) time
