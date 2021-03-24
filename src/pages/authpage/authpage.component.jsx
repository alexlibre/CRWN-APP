import React from 'react'
import SignIn from '../../components/auth/sign-in.component'
import SignUp from '../../components/auth/sign-up.component'
import './authpage.styles.scss'

const AuthPage = () => (
    <section className="auth-page">
        <SignIn />
        <SignUp />
    </section>
)

export default AuthPage