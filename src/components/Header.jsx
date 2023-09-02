import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../images/mesto_logo.svg';

const Header = ({ handleLogOut }) => {
    const [userEmail, setUserEmail] = useState('');
    
    useEffect(() => {
        const currentUserEmail = localStorage.getItem('userName');
        currentUserEmail ? setUserEmail(currentUserEmail) : setUserEmail('');
    })

    // создаём переменную для отображения нужной шапки
    const location = useLocation();

    return (
        <header className="header">
            <img
            src={logo} alt="Логотип Место России"
            className="header__logo" />
            {
                location.pathname === '/sign-in' &&
                (<Link to="sign-up" className="header__link-in">
                    Регистрация
                </Link>)}
            {
                location.pathname === '/sign-up' &&
                (<Link to="sign-in" className="header__link-in">
                    Войти
                </Link>)}
            {
                location.pathname === '/' &&
                (
                    <nav className="header__auth-nav">
                        <p className="header__user-email">{userEmail}</p>
                        <button className="header__quit-button" onClick={handleLogOut}>Выйти</button>
                    </nav>
                )
            }
        </header>
    );
};

export default Header;