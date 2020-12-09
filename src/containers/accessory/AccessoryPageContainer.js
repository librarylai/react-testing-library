import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function AccessoryPageContainer(props) {
  const PageContainer = styled.div`
    width: 1280px;
    display: flex;
    align-content: center;
    justify-content: center;
  `
  const ListWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `
  return (
    <PageContainer>
      <ListWrapper></ListWrapper>
    </PageContainer>
  )
}

AccessoryPageContainer.propTypes = {}

export default AccessoryPageContainer
