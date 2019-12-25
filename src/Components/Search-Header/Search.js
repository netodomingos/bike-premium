import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Search.css'
import Logo from './img/logo.png'


export default class Search extends Component{
    render(){
        return (
            <header className='header-top-2'>
                <div className="brand">
                    <Link to="/">
                        <img src={Logo} alt="Logo"/>
                    </Link>
                </div>

                <div className="input-search">
                    <div className="input-group input-group-lg">
                        <input type="text" className="form-control mt-3" placeholder="Pesquise aqui" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                             <div className="input-group-append">
                                <button className="btn btn-success button" type="button">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                    </div>
                </div>

                <div className="login">
                    <div className="user-img">
                        <span> <img src="img/user-solid.svg" alt=""/></span>
                    </div>
                </div>
        
                <div className="li-login">
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
      
                <div className="cart">
                <ul>
                    <li>
                    <button className="btn btn-outline-success button">
                        <i className="fas fa-shopping-cart ">  
                        </i>
                    </button>
                    </li>
                </ul>
                </div>
        </header>

        )
    }
}