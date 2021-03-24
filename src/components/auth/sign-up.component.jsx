import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            displayName: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault()

        const { email, password, displayName, confirmPassword } = this.state

        if (password !== confirmPassword) {
            console.error('Passwords do not match')
            return
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })
            
            this.setState({
                email: '',
                password: '',
                confirmPassword: '',
                displayName: ''
            })
        } catch (error) {
            console.error('Error at sign up', error.message)
        }
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { email, password, displayName, confirmPassword } = this.state

        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with e-mail and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Display name"
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}
                        autoComplete="true"
                        required />
                    <FormInput
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        handleChange={this.handleChange}
                        autoComplete="true"
                        required />
                    <FormInput
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        handleChange={this.handleChange}
                        autoComplete="true"
                        required />
                    <FormInput
                        label="Repeat password"
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        autoComplete="true"
                        required />
                    <div className="buttons">
                        <CustomButton type="submit">Sign up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp