import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Assets/logo.png'
import Bicycle from './Assets/bicycle.svg'
import Wave from './Assets/wave.png'

import './styles/Login.css'


const Login = () => {
    return (
        <div>
            <img src={Wave} className='wave' alt='wave'/>
            <div className='join-container'>
                <div className='img'>
                    <img src={Bicycle} alt='design' />
                </div>
                <div className='login-container'>
                    <form>
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
                                <input className='input' type='text' />
                            </div>
                        </div>
                        <div className='input-div two focus'>
                            <div className='comunity-container'>
                                <h5>Senha</h5>
                                <input className='input' type='password'/>
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

export default Login