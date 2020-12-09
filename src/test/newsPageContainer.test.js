import React from 'react'
import {
  render,
  screen
} from '@testing-library/react'
import '@testing-library/jest-dom'
import NewsPageContainer from 'containers/newsPageContainer'
import {
  NEWS_DATA_LIST
} from 'constants'

describe('newsPageContainer', () => {
  test(' render all the news picture ', () => {
    const {
      container,
      getByTestId
    } = render( < NewsPageContainer / > )
    console.log('screen', getByTestId('pic'))
  })
})