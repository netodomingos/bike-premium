import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Search.css'
import Logo from './img/logo.png'

import user from './img/user.png'
import cart from './img/cart.png'
import favourite from './img/favourite.png'

export default function Search (){

    const Search = ({ props }) => {
        const [ searchValue, setSearchValue ] = useState('')

        const handleSearchInputChange = (event) => {
            setSearchValue(event.target.value)
        }

    }

        return (
            <header className='header-top-2'>
                <div className="brand">
                    <Link to="/">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                </div>

                <div className="input-search">
                    <div className="input-group input-group-lg">
                        <input type="text" className="search-input" placeholder="Pesquise aqui" aria-label="Recipient's username" aria-describedby="button-addon2" />
                             <div className="input-group-append">
                                <button className="search-button" type="button">
                                    <i className="fas fa-search" style={{color: '#fff'}}></i>
                                </button>
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
