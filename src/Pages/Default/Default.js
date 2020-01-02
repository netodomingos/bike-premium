import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Ciclista from './img/Ciclista.png'

import './Styles/Default.css'

export default class Default extends Component{
    render(){
        return (
            <div className='container'>
                <h1>Oops! Algo errado aconteceu.</h1>
                <img src={Ciclista} alt='NotFound'/>
                <p>Nós não achamos o endereço na qual você procurou, recomendamos retornar para a página principal.</p>
                <Link to='/'>
                    <button>Página Principal</button>
                </Link>
            </div>
        )
    }
}