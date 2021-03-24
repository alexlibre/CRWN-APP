import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss'

const signOut = () => auth.signOut()
const Header = ({ currentUser }) => (
    <header className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <ul className="options">
            <li className="option">
                <Link to="/shop"><span>Shop</span></Link>
            </li>
            <li className="option">
                <Link to="/contact"><span>Contact</span></Link>
            </li>
            {
                currentUser !== null ?
                <li className="option">{currentUser.email} - <span onClick={signOut}>Sign out</span></li> :
                <li className="option">
                    <Link to="/auth"><span>Auth</span></Link>
                </li>
            }
        </ul>
    </header>
)

export default Header