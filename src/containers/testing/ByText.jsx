import React from 'react'
import PropTypes from 'prop-types'

function ByTextComponet(props) {
  return (
    <div>
      {/* 第一種 基本款 <p> <span> <div> <h1>....任何能輸入文字的 element */}
      <p>Library react test library </p>
      <span>use span to say something </span>
      {/* 第二種 input type='submit' 所產生按鈕上的文字 */}
      <input type='submit' value='Click me' />
    </div>
  )
}

ByTextComponet.propTypes = {}

export default ByTextComponet
