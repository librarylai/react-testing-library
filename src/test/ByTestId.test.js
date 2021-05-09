import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ByTestIdComponent from 'containers/testing/ByTestId'

describe('ByTestId', () => {
  beforeEach(() => {
    render(<ByTestIdComponent />)
  })
  test(' get testId container', () => {
    const containerNode = screen.getByTestId('dataTestIdContainer')
    screen.debug(containerNode)
  })
  test(' get testId title ', () => {
    const titleNode = screen.getByTestId('dataTestIdContainer-title')
    screen.debug(titleNode)
  })
  test(' get testId content', () => {
    const contentNode = screen.getByTestId('dataTestIdContainer-content')
    screen.debug(contentNode)
  })
})
