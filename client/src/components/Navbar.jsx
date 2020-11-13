import React, {useContext} from "react"
import { NavLink, useHistory } from "react-router-dom"
import {AuthContext} from "../context/AuthContext";

const Navbar = () => {

    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo center">Mern App Links</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to="/create">Создать</NavLink></li>
                    <li><NavLink to="/links">Ссылки</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar