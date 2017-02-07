/**
 *  Create Reducer
 */
export default (handlers = {}, initState = {}) =>
  (state = initState, { type, payload }) => (
    handlers[type] ? handlers[type](state, payload) : state
  )
