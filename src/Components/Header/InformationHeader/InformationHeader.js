import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './InformationHeader.css'

export default class Header extends Component{
    render(){
        return (
            <div>
                <header className="header-top-1">
                    <div className='external-div'>
                        <div className="social-media-div">
                            <ul className="social-media">
                                <li>
                                    <a href='https://www.instagram.com/nexus.dev/' style={{textDecoration: 'none', color: '#fff'}}>
                                        <i className="fab fa-instagram"></i>    
                                    </a>
                                </li>
                                <li>
                                    <a href='#' style={{textDecoration: 'none', color: '#fff'}}>
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href='#'style={{textDecoration: 'none', color: '#fff'}}>
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="slogan">
                            <p className="">
                                A melhor Bike E-Commerce do Brasil!
                            </p>
                        </div>
                        
                        <div className="whatsApp-api">
                            <a href="https://api.whatsapp.com/send?phone=5581987654321" style={{textDecoration: 'none', color: '#fff'}}>
                                <i className="fab fa-whatsapp">
                                </i>
                                (81)98765-4321
                            </a>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}