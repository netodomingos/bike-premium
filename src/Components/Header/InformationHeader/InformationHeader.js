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
                                    <i className="fab fa-instagram"></i>
                                </li>
                                <li>
                                    <i className="fab fa-facebook-f"></i>
                                </li>
                                <li>
                                    <i className="fab fa-twitter"></i>
                                </li>
                            </ul>
                        </div>

                        <div className="slogan">
                            <p className="">
                                A melhor Bike E-Commerce do Brasil!
                            </p>
                        </div>
                        
                        <div className="whatsApp-api">
                            <Link style={{textDecoration: 'none', color: "#fff"}} to="https://api.whatsapp.com/send?phone=5581987654321">
                            <i className="fab fa-whatsapp">
                            </i>
                            (81)98765-4321
                            </Link>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}