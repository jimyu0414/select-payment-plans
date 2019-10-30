import React from 'react';
import { ReactComponent as SVGLogoOpenpay } from '../svg/openpay.svg';
import { ReactComponent as SVGCart } from '../svg/shopping-cart.svg';

class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <SVGLogoOpenpay className="header__logo"/>
                <div className="header__total-price">
                    <SVGCart />
                    <span>$123.45</span>
                </div>
            </header>
        );
    }
}

export default Header;