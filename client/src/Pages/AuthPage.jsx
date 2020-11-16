import React, {useContext, useEffect, useState} from "react";
import "./AuthPage.css"
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

const AuthPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const { loading, request, error, clearError } = useHttp()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

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

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3 text-center">
                <h3 className="row__title">MERN APP LINKS</h3>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>
                        <div className="form-field">
                            <div className="input-field">
                                <input
                                    placeholder=" "
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    className="orange-input"
                                    onChange={changeHandler}
                                />
                                 <label htmlFor="email">Email</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder=" "
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={form.password}
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
                            onClick={loginHandler}
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