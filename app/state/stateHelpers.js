import { curry, compose, nth, sortBy, keys, indexOf, identity, tap } from 'ramda'

export const debug = tap(console.log)

export const relativeEntry = curry((currentEntry, modifier, entries) => {
    const entryKeys = compose(
        sortBy(identity),
        keys
    )(entries)

    const modifiedIndex = compose(modifier, indexOf(currentEntry))(entryKeys)
    return nth(modifiedIndex, entryKeys)
})
