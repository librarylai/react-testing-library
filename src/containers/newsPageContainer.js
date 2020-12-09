import React from 'react'
import { NEWS_DATA_LIST } from 'constants.js'
import styled from 'styled-components'

import css from 'scss/newsPageContainer.module.scss'

function NewsPageContainer() {
  const NewPageContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `
  const CardWrapper = styled.div`
    width: 500px;
    outline: solid 1px red;
  `
  const CardImageWrapper = styled.div`
    width: 100%;
    height: 350px;
    img {
      width: 100%;
      height: 100%;
    }
  `
  const CardPostListWrapper = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    padding-left: 20px;
  `
  function renderNewsCardView() {
    return NEWS_DATA_LIST.map(newItem => {
      return (
        <CardWrapper>
          <CardImageWrapper>
            <img src={newItem.imgSrc} alt='image' />
          </CardImageWrapper>
          <h2>{newItem.title}</h2>
          <CardPostListWrapper>
            {newItem.newsList.map(listItem => {
              return (
                <div>
                  <a href={listItem.url}>{listItem.postTitle}</a>
                </div>
              )
            })}
          </CardPostListWrapper>
        </CardWrapper>
      )
    })
  }
  return <NewPageContainer data-testid='pic'>{renderNewsCardView()}</NewPageContainer>
}

export default NewsPageContainer
