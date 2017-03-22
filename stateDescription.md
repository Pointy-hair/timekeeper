# Timeline state description

Describes the state shape of the timeline app and all actions.

## State

```js
{
    "entries": [string],
    "currentEntry": string,
    "entriesById": {
        "string": {
            "id": string
            "categories": [string],
            "data": [{
                "id": int,
                "time": timestamp,
                "category": string,
            }, ...]
        }
    },
    "categoriesById": {
        "category": {
            "category": string,
            "type": string
        }
    }
}
```

## Actions

* ADD_CATEGORY - add a category to the current entry
* DELETE_CATEGORY - remove a category from the current entry
* UPDATE_CATEGORY - update a category or type
* PREVIOUS_ENTRY - change currentEntry to be the previous saved entry
* NEXT_ENTRY - change currentEntry to be the next saved entry
* SAVE_ENTRY_DATA - save data to the current entry
