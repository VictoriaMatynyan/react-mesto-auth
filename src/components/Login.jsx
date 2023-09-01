import React, { useState } from "react";

const Login = ({ handleLogin }) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleChangeEmail = (e) => {
        setUserEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setUserPassword(e.target.value);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(userEmail, userPassword); // передаём актуальные значения полей формы
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
                autoComplete="off"
                value={userEmail}
                onChange={handleChangeEmail}
            />
            <input
            className="authentication-form__input"
                type="password"
                name="password"
                placeholder="Пароль"
                value={userPassword}
                onChange={handleChangePassword}
            />
            <button
                className="authentication-form__button"
                type="submit">
                    Войти
            </button>
        </form>
    )
}

export default Login;

// для себя: в теории в calorie-zen компонент Login был расширен так, возможно, 
// этот компонент изменю в дальнейшем так же
{/* <div className="login__signup">
        <p>Ещё не зарегистрированы?</p>
        <Link to="/register" className="signup__link">Зарегистрироваться</Link>
      </div> */}

// добавить на форму noValidate