import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Logo from './Assets/logo.png'
import Bicycle from './Assets/bicycle.svg'

import './styles/Login.css'
import Axios from 'axios'

export default class Login extends Component {
    state = {
        emailInput: '',
        passwordInput: ''
    }

    handleInputEmailChange = event => {
        this.setState({
            emailInput: event.target.value,
        })
    }

    handleInputPasswordChange = event => {
        this.setState({
            passwordInput: event.target.value
        })
    }

    handleSubmitLogin = async event => {
        event.preventDefault()
        
       try{
           const userLogin = {
               email: this.state.emailInput,
               password: this.state.passwordInput
           }
   
           Axios.post(``, {userLogin}).then(res => {
               console.log(res);
               console.log(res);
           })
       }
       catch(err){
           console.log(err);
       }
    }

    render(){
        return (
            <div>
                <div className='join-container'>
                    <div className='img'>
                        <img src={Bicycle} alt='design' />
                    </div>
                    <div className='login-container'>
                        <form className='' onSubmit={this.handleSubmitLogin}>
                            <img className='chat' src={Logo} alt='logo' />
                            <div className='buttonBox'>
                                <Link style={{textDecoration:'none'}} to='/login'>
                                    <button className='toggle-btn1 login' id='btn1'>Login</button>
                                </Link>
                                <Link style={{textDecoration:'none'}} to='/cadastro'>
                                    <button className='toggle-btn1'>Cadastro</button>
                                </Link>
                            </div>
                            <div className='input-div one focus'>
                                <div className='username-container'>
                                    <h5>Email</h5>
                                    <input 
                                        className='input' 
                                        type='text'
                                        value={this.state.emailInput}
                                        onChange={this.handleInputEmailChange}
                                    />
                                </div>
                            </div>
                            <div className='input-div two focus'>
                                <div className='comunity-container'>
                                    <h5>Senha</h5>
                                    <input 
                                        className='input' 
                                        type='password'
                                        value={this.state.passwordInput}
                                        onChange={this.handleInputPasswordChange}
                                    />
                                </div>
                            </div>
                            <div className='checkbox'>
                                <input type='checkbox'/> <span>Manter-se Logado</span>
                            </div>
                            <Link style={{ textDecoration: 'none' }}>
                                <button type='submit' className='btn1'>LOGIN</button>
                            </Link>
                            <div className='cadastre'>
                                <span>Não possui cadastro? </span><Link to='/cadastro' className='link' style={{ textDecoration: 'none', color:'#32be32' }}>Clique Aqui!</Link>
                            </div>
                        </form>
                    </div>
                </div >
            </div>
        )
    }
}
