import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from './Assets/logo.png'
import Bicycle from './Assets/bicycle.svg'
import Wave from './Assets/wave.png'

import { cpfMask } from './Masks/cpfMask'

import './Styles/Cadastro.css'

const Cadastro = () => {
    const [ cpfMask, setCpfMask ] = useState('')

    const cpfChange = (event) => {
        
    }

    return (
        <div>
            <img src={Wave} className='wave' alt='wave'/>
            <div className='join-container'>
                <div className='img'>
                    <img src={Bicycle} alt='design' />
                </div>
                <div className='register-container'>
                    <form>
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
                                <input className='input' type='text' />
                            </div>
                            <div>
                                <h5>Sobrenome:</h5>
                                <input className='input' type='text' />
                            </div>
                        </div>
                        <div className='input-div two focus'>
                            <div>
                                <h5>Email:</h5>
                                <input className='input' type='text'/>
                            </div>
                        </div>
                        <div className='input-div two focus'>
                            <div>
                                <h5>CPF:</h5>
                                <input className='input' type='text' onChange={(e) => setCpfMask(e.target.value) }/>
                            </div>
                        </div>
                        <div className='input-div two focus'>
                            <div>
                                <h5>Senha:</h5>
                                <input className='input' type='password'/>
                            </div>
                        </div>

                        <div className='checkbox'>
                            <input type='checkbox'/> <span>Manter-se Logado</span>
                        </div>
                        <Link style={{ textDecoration: 'none' }}>
                            <button type='submit' className='btn'>LOGIN</button>
                        </Link>
                    </form>
                </div>
            </div >
        </div>
    )
}

export default Cadastro
