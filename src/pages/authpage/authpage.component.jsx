import React from 'react'
import SignIn from '../../components/auth/sign-in.component'
import SignUp from '../../components/auth/sign-up.component'
import './authpage.styles.scss'

const AuthPage = () => (
    <div>
        <SignIn />
        <SignUp />
    </div>
)

export default AuthPage