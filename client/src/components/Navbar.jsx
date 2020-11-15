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
            <div className="nav-wrapper orange darken-1">
                <a href="https://www.youtube.com/watch?v=ivDjWYcKDZI&t=7458s"
                   className="brand-logo center"
                >
                    Mern App Links
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/create">Создать</NavLink></li>
                    <li><NavLink to="/links">Ссылки</NavLink></li>
                    <li><a href="/" onClick={ logoutHandler }>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar