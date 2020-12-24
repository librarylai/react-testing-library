import React, { useContext } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { ShopCartDataContext } from 'context/ShopCartDataContext'

const NavBarContainer = styled.div`
  width: 100%;
`
const ToolbarStyle = styled(Toolbar)`
  justify-content: space-between;
`
const TypographyStyle = styled(Typography)``

function NavBar({ shopCartData = [0, 1, 2] }) {
  // shopCartDataContext comsumer
  const shopCartDataContext = useContext(ShopCartDataContext)

  const ShopCartWrapper = styled.div`
    padding: 5px;
    border-radius: 50%;
    cursor: pointer;
    :after {
      content: '${props => props.shopCartDataLength}';
      display: inline-flex;
      width:10px;
      height:10px;
      padding: 6px;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background-color: #ff8c94;
      color: #ffd3b5;
      font-weight: bold;
      text-align: center;
      transform: translate(-15px);
      transition:0.3s;
      font-size: 14px;
    }
    :hover{
      :after{
        background-color: red;
        color: #fbdab3;
        box-shadow: 0px 0px 5px red;
      }
    }
  `
  return (
    <NavBarContainer>
      <AppBar position='static' style={{ backgroundColor: '#283c63' }}>
        <ToolbarStyle>
          <TypographyStyle variant='h6'>Jewelry Shop</TypographyStyle>
          <ShopCartWrapper shopCartDataLength={shopCartDataContext.shopCartData.length}>
            <ShoppingCartIcon fontSize='large' />
          </ShopCartWrapper>
        </ToolbarStyle>
      </AppBar>
    </NavBarContainer>
  )
}

NavBar.propTypes = {
  shopCartData: PropTypes.array
}

export default NavBar
