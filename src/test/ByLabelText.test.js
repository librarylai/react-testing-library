import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ByLabelTest from 'containers/testing/ByLabelTest'

describe('ByLabelTest', () => {
  render(<ByLabelTest />)
  test(' get label test userName ', () => {
    const inputNode = screen.getByLabelText('Username', { selector: 'textarea' })
    screen.debug(inputNode)
  })
})
