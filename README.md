# Redux Utilities
> This is a small library with some helper functions useful for applications build with [Redux](redux.js.org).


[![Build Status](https://img.shields.io/travis/bulicmatko/redux-utilities.svg?style=flat-square)](https://travis-ci.org/bulicmatko/redux-utilities)
[![NPM Status](https://img.shields.io/npm/v/redux-utilities.svg?style=flat-square)](https://www.npmjs.com/package/redux-utilities)
[![NPM Status](https://img.shields.io/npm/dm/redux-utilities.svg?style=flat-square)](http://npm-stat.com/charts.html?package=redux-utilities&from=2017-01-01)
[![NPM Status](https://img.shields.io/npm/dt/redux-utilities.svg?style=flat-square)](https://www.npmjs.org/package/redux-utilities)
[![NPM Status](https://img.shields.io/npm/l/redux-utilities.svg?style=flat-square)](https://github.com/bulicmatko/redux-utilities/blob/master/LICENSE)


### Create Action Types

##### Usage:

```js
// model-action-types.js

import { createActionTypes } from 'redux-utilities'

export default createActionTypes(
  [
    {
      FETCH: ['START', 'SUCCESS', 'FAIL'],
      SAVE: ['START', 'SUCCESS', 'FAIL']
    },
    ['SET_DATA']
  ],
  'MODEL'
)
```

Will export an object:

```js
{
  FETCH: {
    START: 'MODEL.FETCH.START',
    SUCCESS: 'MODEL.FETCH.SUCCESS',
    FAIL: 'MODEL.FETCH.FAIL'
  },
  SAVE: {
    START: 'MODEL.SAVE.START',
    SUCCESS: 'MODEL.SAVE.SUCCESS',
    FAIL: 'MODEL.SAVE.FAIL'
  },
  SET_DATA: 'MODEL.SET_DATA'
}
```

### Create Reducer

##### Usage:

```js
// model-reducer.js

import { createReducer } from 'redux-utilities'

import MODEL from './model-action-types'

const initState = {
  isLoading: false,
  isSaving: false,
  data: [],
  error: null
}

export default createReducer({
  [MODEL.FETCH.START]: state => (
    { ...state, isLoading: true }
  )
  [MODEL.FETCH.SUCCESS]: (state, { data }) => (
    { ...state, isLoading: false, data }
  )
  [MODEL.FETCH.FAIL]: state => (
    { ...state, isLoading: false, error: { message: 'Could not fetch...' } }
  )

  [MODEL.SET_DATA]: (state, { field, value }) => (
    { ...state, data: { ...state.data, [field]: value } }
  )
    
  [MODEL.SAVE.START]: state => (
    { ...state, isSaving: true }
  )
  [MODEL.SAVE.SUCCESS]: (state, { data }) => (
    { ...state, isSaving: false }
  )
  [MODEL.SAVE.FAIL]: state => (
    { ...state, isSaving: false, error: { message: 'Could not save...' } }
  )
    
  ...
    
}, initState)
```

Will export a `reducer` that can be used with Redux's `combineReducer` function:

```js
import modelReducer from './model-reducer.js'

...
combineReducers({
  modelReducer,
  ...
})
...
```


### Create Module Factory

Docs: WIP


## Contributing

If you want to contribute or share your ideas, please feel free to [contact me](mailto:bulicmatko@gmail.com).


## License

Copyright (c) 2017 [Matko Bulic](mailto:bulicmatko@gmail.com)  
Licensed under the [MIT License](https://github.com/bulicmatko/redux-utilities/blob/master/LICENSE)
