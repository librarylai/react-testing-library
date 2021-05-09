import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { JEWELRY_DATA_LIST } from 'constants.js'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { Button } from '@material-ui/core'
import { ShopCartDataContext } from 'context/ShopCartDataContext'

function AccessoryPageContainer(props) {
  // shopCartDataContext comsumer
  const shopCartDataContext = useContext(ShopCartDataContext)

  const PageContainer = styled.div`
    width: 1280px;
    margin-top: 16px;
    display: flex;
    align-content: center;
    justify-content: center;
  `
  const ListWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  `
  const JewelryItemWrapper = styled.div`
    width: 300px;
    margin-right: 16px;
    margin-bottom: 16px;
    border: solid 1px #f2f2f2;
    box-shadow: 1px 2px 5px #b9b9b9;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
  `
  const JewelryInfo = styled.p`
    margin-bottom: 4px;
    font-size: 14px;
    color: #aaa;
  `
  const JewelryInfoPrice = styled(JewelryInfo)`
    font-size: 18px;
    font-weight: bold;
  `
  // handle add to shop cart
  function handleAddToShopCart(item) {
    shopCartDataContext.setShopCartData(prevData => {
      return [...prevData, item]
    })
  }
  // render 商品列表
  function renderJewelryList() {
    return JEWELRY_DATA_LIST.map((item, index) => {
      return (
        <JewelryItemWrapper key={index} data-testid='jewelryItem'>
          <img src={item.imgSrc} />
          <JewelryInfo>{item.title}</JewelryInfo>
          <JewelryInfo>{item.desc}</JewelryInfo>
          <JewelryInfoPrice>NT$ {item.price}</JewelryInfoPrice>
          <Button variant='contained' color='primary' style={{ width: 'fit-content' }} onClick={() => handleAddToShopCart(item)}>
            <AddShoppingCartIcon></AddShoppingCartIcon>
          </Button>
        </JewelryItemWrapper>
      )
    })
  }
  return (
    <PageContainer>
      <ListWrapper data-testid='listWrapper'>{renderJewelryList()}</ListWrapper>
    </PageContainer>
  )
}

AccessoryPageContainer.propTypes = {}

export default AccessoryPageContainer
