import React from 'react'
import PropTypes from 'prop-types'

function ByTestIdComponent(props) {
  return (
    <div data-testid='dataTestIdContainer'>
      <h1 data-testid='dataTestIdContainer-title'> Title 這是標題 </h1>
      <h4 data-testid='dataTestIdContainer-content'> Content 這是內文 </h4>
    </div>
  )
}

ByTestIdComponent.propTypes = {}

export default ByTestIdComponent
