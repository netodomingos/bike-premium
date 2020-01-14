import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Search.css'
import Logo from './img/logo.png'

import user from './img/user.png'
import cart from './img/cart.png'
import favourite from './img/favourite.png'

const searchTerm = ({props}) => {
    return props
}

function Search (){
        return (
            <header className='header-top-2'>
                <div className="brand">
                    <Link to="/">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                </div>

                <div className="input-search">
                    <div className="input-group input-group-lg">
                        <input type="text" className="search-input" placeholder="Pesquise aqui" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={(event) => { searchTerm(event.target.value)}} />
                             <div className="input-group-append">
                                 <Link to='/search' style={{ textDecoration: 'none' }}>
                                    <button className="search-button" type="button">
                                        <i className="fas fa-search" style={{color: '#fff'}}></i>
                                    </button>
                                 </Link>
                            </div>
                    </div>
                </div>
        
                <div className="li-login mt-4">
                    <div className='Icon'>
                        <img src={user} alt='user'/>
                    </div>
                    <div className='loginCadastro'>
                        <ul>
                            <li>
                                <Link to="/login">
                                    Login   
                                </Link>
                            </li>
                            <li>
                                <Link to="/cadastro">
                                    Cadastre-se
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="icons mt-4">
                    <ul>
                        <li>
                            <button className="button Icon">
                            <img src={favourite} alt='favourite'/>
                            </button>
                        </li>
                    </ul>
                </div>
      
                <div className="icons mt-4">
                    <ul>
                        <li>
                            <button className="button Icon">
                                <img src={cart} alt='cart'/>
                            </button>
                        </li>
                    </ul>
                </div>
        </header>

        )
}

export { Search, searchTerm }