import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (e) => {
        const {value, name} = e.target
        this.setState({[name]: value})
    }

    render() {
        const { email, password } = this.state

        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with e-mail and password</span>

                <form onSubmit={this.handleSubmit}>
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
                    <CustomButton
                        type="submit"
                        text="Sign in">Sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn