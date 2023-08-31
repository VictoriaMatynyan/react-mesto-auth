import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Register = ({ handleRegistration }) => {
    const [formValue, setFormValue] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValue({
            // деструктуризацией сохраняем все свойства formValue и добавляем новое свойство name со знчением value
            ...formValue,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegistration(formValue); // передаём актуальные значения полей формы
    }
    
    return (
        <form
            className="authentication-form"
            onSubmit={handleSubmit}
            name="login"
        >
            <h2 className="authentication-form__title">Вход</h2>
            <input
                className="authentication-form__input"
                type="email"
                name="email"
                placeholder="Email"
                value={formValue.email}
                onChange={handleChange}
            />
            <input
            className="authentication-form__input"
                type="password"
                name="password"
                placeholder="Пароль"
                value={formValue.password}
                onChange={handleChange}
            />
            <button
                className="authentication-form__button"
                type="submit">
                    Зарегистрироваться
            </button>
            <p className="authentication-form__text">Уже зарегистрированы?
            <Link to="sign-in" className="authentication-form__link"> Войти</Link>
            </p>
        </form>
    )
}

export default Register;