import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

const Header = () => (
    <header className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <ul className="options">
            <li className="option">
                <Link to="/shop">Shop</Link>
            </li>
            <li className="option">
                <Link to="/contact">Contact</Link>
            </li>
            <li className="option">
                <Link to="/auth">Auth</Link>
            </li>
        </ul>
    </header>
)

export default Header