import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ByText from 'containers/testing/ByText'

describe('ByText', () => {
  beforeEach(() => {
    render(<ByText />)
  })
  test(' get text by p  ', () => {
    const pNode = screen.getByText(/Library/gm)
    screen.debug(pNode)
  })
  test(' get text by span  ', () => {
    const spanNode = screen.getByText(/use/gm)
    screen.debug(spanNode)
  })
  test(' get text by input submit value  ', () => {
    const submitNode = screen.getByText(/Click me/gm)
    screen.debug(submitNode)
  })
})
