import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../images/mesto_logo.svg';

const Header = ({ userEmail, handleSignOut }) => {
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
                        <Link to="sign-out" className="header__link-out" onClick={handleSignOut}>Выйти</Link>
                    </nav>
                )
            }
        </header>
    );
};

export default Header;