import React from 'react';
import FormInput from "../form-input/form-input.component";
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.utile';
import './signin.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
         this.state = {
             email: '',
             password: ''
         }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with Email &amp; Password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        id="signin-email" 
                        handleChange={this.handleChange}
                        label="Email"
                        required
                    />

                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        id="signin-password" 
                        handleChange={this.handleChange}
                        label="Password"
                        required
                    />
                    
                    <div className="button">
                        <CustomButton type="submit" > SignIn </CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn> SignIn With Google </CustomButton>  
                    </div>                
                </form>
            </div>
        )
    }
}

export default SignIn;
