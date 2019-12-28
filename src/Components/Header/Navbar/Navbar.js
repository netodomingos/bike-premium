import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

export default class Navbar extends Component{
    render(){
        return(
            <div class="nav-bar">
                <nav>
                    <ul>
                        <li class="dropdown">
                            <Link to="" class="dropbtn">
                                HOME
                            </Link>
                        </li>
                        <li class="dropdown">
                        <Link to="" class="dropbtn">
                            ACESSÓRIOS
                        </Link>
                        <ul>
                            <li>
                            <div class="dropdown-content">
                                <Link to="#" >Link 1</Link>
                                <Link to="#" >Link 2</Link>
                                <Link to="#" >Link 3</Link>
                            </div>
                            </li>
                        </ul>
                        </li>
                        <li class="dropdown">
                        <Link to="" class="dropbtn">
                            COMPONENTES
                        </Link>
                        <ul>
                            <li>
                            <div class="dropdown-content">
                                <Link to="#" >Link 1</Link>
                                <Link to="#" >Link 2</Link>
                                <Link to="#" >Link 3</Link>
                            </div>
                            </li>
                        </ul>
                        </li>
                        <li class="dropdown">
                        <Link to="" class="dropbtn">
                            QUADROS
                        </Link>
                        <ul>
                            <li>
                            <div class="dropdown-content">
                                <Link to="#" >Link 1</Link>
                                <Link to="#" >Link 2</Link>
                                <Link to="#" >Link 3</Link>
                            </div>
                            </li>
                        </ul>
                        </li>
                        <li class="dropdown">
                        <Link to="" class="dropbtn">
                            MONTAGEM
                        </Link>
                        <ul>
                            <li>
                            <div class="dropdown-content">
                                <Link to="#" >Link 1</Link>
                                <Link to="#" >Link 2</Link>
                                <Link to="#" >Link 3</Link>
                            </div>
                            </li>
                        </ul>
                        </li>
                        <li class="dropdown">
                        <Link to="" class="dropbtn">
                            PROMOÇÃO
                        </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}