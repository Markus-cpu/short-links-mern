import React, {useEffect, useState} from "react";
import "./AuthPage.css"
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";

const AuthPage = () => {
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        console.log('Error: ', error)
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = (event) => {
        event.preventDefault()
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    
    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            message(data.message)
        } catch (e) {}
    }
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сокращая Ссылку!</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div className="form-field">
                            <div className="input-field">
                                <input
                                    placeholder="Input email"
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="orange-input"
                                    onChange={changeHandler}
                                />
                                 <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Input password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="orange-input"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="password">Password</label>
                            </div>

                        </div>
                    </div>
                    <div className="card-action">

                        {/*Логанизация пользователя*/}
                        <button
                            className="btn btn-style yellow darken-4"
                            disabled={loading}
                        >
                            Войти
                        </button>

                        {/*Регистрация пользователя*/}
                        <button
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Регистрация
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPage