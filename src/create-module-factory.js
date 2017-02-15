import createActionTypes from './create-action-types'
import createReducer from './create-reducer'

/**
 *  Create Module Factory
 */
export default ({ actionTypes, actionCreators, initState, reducerFunctions, reducer, selectors }) =>
  ({ namespace, foreignReducer = () => ({}), rootSelector }) => {
    const at = createActionTypes(actionTypes, namespace)
    const s = selectors(rootSelector)
    const ac = actionCreators(at, s)
    const r = createReducer({
      ...reducer(at, reducerFunctions),
      ...foreignReducer(reducerFunctions)
    }, initState)

    return {
      actionTypes: at,
      ...at,
      actionCreators: ac,
      ...ac,
      reducer: r,
      selectors: s,
      ...s
    }
  }
