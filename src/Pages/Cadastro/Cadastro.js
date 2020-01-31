import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import Logo from './Assets/logo.png'
import Bicycle from './Assets/bicycle.svg'

import { cpfMask } from './Masks/cpfMask'
import { phoneMask } from './Masks/phoneMask'

import './Styles/Cadastro.css'

class Cadastro extends Component {
    state = {
        cpf: '',
        phone:'',
        email: '',
        nome: '',
        sobrenome: '',
        password: '',
    }

    getName = event => {
        this.setState({
            nome: event.target.value,
        })
    }
    getSobrenome = event => {
        this.setState({
            sobrenome: event.target.value,
        })
    }
    getEmail = event => {
        this.setState({
            email: event.target.value,
        })
    }
    getPhone = event => {
        this.setState({
            phone: phoneMask(event.target.value),
        })
    }
    getCpf = event => {
        this.setState({
            cpf: cpfMask(event.target.value),
        })
    }
    getPassword = event => {
        this.setState({
            password: event.target.value,
        })
    }

    handleSubmitRegister = async event => {
        event.preventDefault()
        
        try{
            const userRegister = {
                name: this.state.name,
                sobrenome: this.state.sobrenome,
                email: this.state.email,
                phone: this.state.phone,
                cpf: this.state.cpf,
                password: this.state.password,
            }
    
            Axios.post(``, {userRegister}).then(res => {
                console.log(res);
                console.log(res.data);
            })
        }
        catch(err){
            console.log(err);
        }
    }

    render(){
        const { cpf, phone, nome, sobrenome, password, email } = this.state

        return (
            <div>
                <div className='join-container'>
                    <div className='img'>
                        <img src={Bicycle} alt='design' />
                    </div>
                    <div className='register-container'>
                        <form onSubmit={this.registerUser}>
                            <img className='logo' src={Logo} alt='logo' />
                            <div className='buttonBox'>
                                <Link to='/login'>
                                    <button className='toggle-btn'>Login</button>
                                </Link>
                                <Link to='/cadastro'>
                                    <button className='toggle-btn cadastro' id='btn'>Cadastro</button>
                                </Link>
                            </div>
                            <div className='input-div one focus'>
                                <div>
                                    <h5 className='name'>Nome:</h5>
                                    <input className='input' type='text' onChange={this.getName} value={nome}  />
                                </div>
                                <div>
                                    <h5>Sobrenome:</h5>
                                    <input className='input' type='text' onChange={this.getSobrenome} value={sobrenome} />
                                </div>
                            </div>
                            <div className='input-div two focus'>
                                <div>
                                    <h5>Email:</h5>
                                    <input className='input' type='text' id='email-input' onChange={this.getEmail} value={email}/>
                                </div>
                            </div>
                            <div className='input-div two focus'>
                                <div>
                                    <h5>Telefone:</h5>
                                    <input className='input' type='text' maxLength='15' onChange={this.getPhone} value={phone}  />
                                </div>
                            </div>
                            <div className='input-div two focus'>
                                <div>
                                    <h5>CPF:</h5>
                                    <input className='input' type='text'  maxLength='14' onChange={this.getCpf} value={cpf} />
                                </div>
                            </div>
                            <div className='input-div two focus'>
                                <div>
                                    <h5>Senha:</h5>
                                    <input className='input' type='password' onChange={this.getPassword} value={password}/>
                                </div>
                            </div>
    
                            <div className='checkbox'>
                                <input type='checkbox'/> <span>Manter-se Logado</span>
                            </div>
                            <Link style={{ textDecoration: 'none', color: '#fff' }}>
                                <button type='submit' className='btn' id='buttonReuserRegister'>ReuserRegister</button>
                            </Link>
                        </form>
                    </div>
                </div >
            </div>
        )
    }
}

export default Cadastro
