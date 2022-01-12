import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #2c3c4d;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LoginBoxWrapper = styled.div`
  width: 400px;
  padding: 40px;
  background-color: #171616;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`
const TitleStyled = styled.h1`
  color: #fcfcfc;
  font-weight: bold;
`
const InputStyled = styled.input`
  border: solid 2px #4399bd;
  padding: 14px 10px;
  margin: 20px auto;
  width: 200px;
  outline: none;
  color: #fff;
  border-radius: 24px;
  transition: 0.3s;
  background-color: transparent;
  &:focus {
    width: 280px;
    color: #51c951;
  }
`
const ButtonStyled = styled.button`
  border: solid 2px #51c951;
  padding: 14px 10px;
  margin: 20px auto;
  outline: none;
  color: #fff;
  border-radius: 24px;
  transition: 0.3s;
  width: 150px;
  background-color: transparent;
  &:hover {
    color: #222;
    background-color: #51c951;
  }
`
function LoginPage(props) {
  // 登入帳號 onChange
  function handleAccountChange(e) {
    console.log('account', e.target.value)
  }
  // 登入密碼 onChange
  function handlePasswordChange(e) {
    console.log('password', e.target.value)
  }
  // 登入按鈕 onClick
  function handleLogin() {
    console.log('login btn click')
  }
  return (
    <LoginPageContainer>
      <LoginBoxWrapper>
        <TitleStyled>使用者登入</TitleStyled>
        <InputStyled data-testid='account' type='text' placeholder='account' onChange={handleAccountChange} />
        <InputStyled data-testid='password' type='password' placeholder='password' onChange={handlePasswordChange} />
        <ButtonStyled data-testid='loginBtn' onClick={handleLogin}>
          Login
        </ButtonStyled>
      </LoginBoxWrapper>
    </LoginPageContainer>
  )
}

LoginPage.propTypes = {}

export default LoginPage
