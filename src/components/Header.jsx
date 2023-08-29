import React from 'react';
import logo from '../images/mesto_logo.svg';

const Header = () => {
    return (
        <header className="header">
        <img
        src={logo} alt="Логотип Место России"
        className="header__logo" />
        </header>
    );
};

export default Header;