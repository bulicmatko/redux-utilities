const { describe, it } = require('mocha')
const { expect } = require('chai')

const { createActionTypes } = require('../index')

/**
 *  Create Action Types - Test
 */
describe('Create Action Types', () => {
  it('should create `action-types` for given input', () => {
    const result = createActionTypes(
      [
        {
          FETCH: ['START', 'SUCCESS', 'FAIL'],
          SAVE: ['START', 'SUCCESS', 'FAIL']
        },
        ['SET_DATA']
      ],
      'MODEL'
    )

    const expected = {
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

    expect(result).to.deep.equal(expected)
  })
})
