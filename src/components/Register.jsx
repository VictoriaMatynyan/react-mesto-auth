import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Register = ({ onRegistration }) => {
    const [email, setUserEmail] = useState('');
    const [password, setUserPassword] = useState('');

    const handleChangeEmail = (e) => {
        setUserEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setUserPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // const {email, password} = formValue;
        onRegistration(email, password); // передаём актуальные значения полей формы
    }

    // const [formValue, setFormValue] = useState({
    //     email: "",
    //     password: "",
    // })

    // const handleChange = (e) => {
    //     const {name, value} = e.target;
    //     setFormValue({
    //         // деструктуризацией сохраняем все свойства formValue и добавляем новое свойство name со знчением value
    //         ...formValue,
    //         [name]: value
    //     })
    // }
    // const handleChange = (e) => {
    //     const {name, value} = e.target;
    //     setFormValue(() => ({...formValue, [name]: value}))
    // }
  
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     handleRegistration({email, password}); // передаём актуальные значения полей формы
    // }
  
    return (
        <form
            className="authentication-form"
            onSubmit={(e) => handleSubmit(e)}
            name="registration"
        >
            <h2 className="authentication-form__title">Вход</h2>
            <input
                className="authentication-form__input"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChangeEmail}
                autoComplete="off"
            />
            <input
            className="authentication-form__input"
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={handleChangePassword}
            />
            <button
                className="authentication-form__button"
                type="submit">
                    Зарегистрироваться
            </button>
            <p className="authentication-form__text">Уже зарегистрированы?
            <Link to="/sign-in" className="authentication-form__link"> Войти</Link>
            </p>
        </form>
    )
}

export default Register;