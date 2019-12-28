import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import notFound from './img/notFound.png'

export default class Default extends Component{
    render(){
        return (
            <div>
                <h3>Não possuimos esse endereço no nosso site!</h3>
                <p>Volte para a área segura!</p>
                <Link to='/'>Home</Link>
                <img src={notFound}/>
            </div>
        )
    }
}