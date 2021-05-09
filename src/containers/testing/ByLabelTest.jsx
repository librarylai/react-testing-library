import React from 'react'
import PropTypes from 'prop-types'

function ByLabelTestComponent(props) {
  return (
    <div>
      {/* 第一種： htmlForm 與 form element id */}
      <label htmlFor='username-input'>Username</label>
      <input id='username-input' />

      {/* 第二種：aria-labelledby 在 form element id 會去引用 id 的值
      參考：https://developers.google.com/web/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships?hl=zh-tw
      */}
      <label id='username-label'>Username</label>
      <input aria-labelledby='username-label' />

      {/* 第三種：放在 label 區塊內 */}
      <label>
        Username <input />
      </label>
      <label>
        <span>Username</span>
        <textarea />
      </label>

      {/* 第四種：aria-label attributes */}
      <input aria-label='Username' />
    </div>
  )
}

ByLabelTestComponent.propTypes = {}

export default ByLabelTestComponent
