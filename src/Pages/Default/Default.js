import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import notFound from './img/notFound.png'

import './Styles/Default.css'

export default class Default extends Component{
    render(){
        return (
            <div className='container'>
                <h1>Oops! Page not Found.</h1>
                <img src={notFound} alt='NotFound'/>
                <p>We can't find page you're looking for.</p>
                <Link to='/'>
                    <button>Back to Home</button>
                </Link>
            </div>
        )
    }
}