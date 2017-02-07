import isString from 'lodash.isstring'
import isObject from 'lodash.isobject'

/**
 *  Create Action Types
 */
export default function createActionTypes (action, prefix) {
  if (isString(action)) {
    return { [action]: `${prefix}.${action}` }
  }

  if (Array.isArray(action)) {
    return action.reduce((prev, curr, index, array) => (
        { ...prev, ...createActionTypes(array[index], prefix) }
    ), {})
  }

  if (isObject(action)) {
    return Object.keys(action).reduce((prev, curr) => (
        { ...prev, [curr]: createActionTypes(action[curr], `${prefix}.${curr}`) }
    ), {})
  }

  return {}
}
