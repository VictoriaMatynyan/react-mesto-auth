export const BASE_URL = 'https://auth.nomoreparties.co.';

// проверяем корректность запроса на сервер
export function validateResponse(res) {
    if(res.ok) {
        return res.json();
    } //в случае ошибки - отклоняем промис
    return Promise.reject(`Ошибка получения ответа от сервера: ${res.status}`)
}

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
    .then(validateResponse)
    .catch((err) => {
        console.log(`Ошибка регистрации: ${err}`);
    })
}

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(res => res.json())
    .then((data) => {
        if(data.jwt) {
            localStorage.setItem('jwt', data.jwt);
            return data;
        }
    })
    .catch((err) => {
        console.log(`Ошибка авторизации: ${err}`);
    })
}

export const checkToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    })
    .then(validateResponse)
    .catch((err) => {
        console.log(`Ошибка проверки токена: ${err}`);
    })
}