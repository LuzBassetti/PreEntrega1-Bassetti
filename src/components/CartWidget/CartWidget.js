import React from 'react';
import { cart } from '../../assets/images';

const CartWidget = () => {
  return (
    <div className='cart-icon MuiBox-root css-3cyd2n'>
      <a id="cartLogo" href="/cart"><img src={cart}  height="35px" width="35px" alt="carrito de compras"/></a>
      <span class="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
      0
      <span class="visually-hidden">unread messages</span>
      </span>
      {/* <a href='/cart'> 
        <button class="MultiButtonBase-root MuiIconButton-root MuiIconButton-sixeMedium css-1afvmso" tabIndex="0" type='button' aria-label='cart'>
          <span className="MuiBadge-root css-1rzb3uu">
            <svg className="MuiSvgIcon-root MuiSvgIcon-colorAction MuiSvgIcon-fontSizeMedium css-13a0l7k" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SoppingCartOutlinedIcon">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            <span className="MuiBadge-badge MuiBadge-standard MuiBadge-anchor0o]riginTopRight MuiBadge-anchor0riginTopRightRectangular MuiBadge-overlapRectangula MuiBadge-colorError css-1fc3w67">
              0
            </span>
          </span>
          <span className='MuiTouchRipple-root css-w0pj6f'></span>
        </button>
      </a> */}
    </div>
  )
}

export default CartWidget