import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import LoginPage from 'containers/login/LoginPage'

describe('LoginPage', () => {
  beforeEach(() => {
    render(<LoginPage />)
  })
  test(' account input onChange test', () => {
    const accountNode = screen.getByTestId('account')
    userEvent.type(accountNode, 'accountInput') // 使用 user.type()
    expect(accountNode).toHaveValue('accountInput')
  })
  test('  login btn onClick test', () => {
    const logSpy = jest.spyOn(console, 'log')
    const loginBtnNode = screen.getByTestId('loginBtn')
    userEvent.click(loginBtnNode)
    expect(logSpy).toHaveBeenCalled()
  })
})
