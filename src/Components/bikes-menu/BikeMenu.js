import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Asfalto from './img/asfalto.png'
import Bmx from './img/bmx.png'
import Passeio from './img/passeio.png'
import Trilhas from './img/trilhas.png'

import './styles/BikeMenu.css'

export default class BikeMenu extends Component {
    render() {
        return (
            <div className='bike-menu'>
                <h3 className='mt-5'>Qual é o seu</h3>
                <h3>objetivo?</h3>
                <div className='bikes'>
                    <Link to='/montagem/asfalto'>
                        <div className='bike'>
                            <img src={Asfalto} alt='asfalto'/>
                            <p className='lead'>SPEED - ESTRADA</p>
                        </div>
                    </Link>
                    <Link to='/montagem/bmx'>
                        <div className='bike'>
                            <img src={Bmx} alt='bmx'/>
                            <p className='lead'>MANOBRAS - BMX</p>
                        </div>
                    </Link>
                    <Link to='/montagem/passeio'>
                        <div className='bike'>
                            <img src={Passeio} alt='urban'/>
                            <p className='lead'>URBAN - PASSEIO</p>
                        </div>
                    </Link>
                    <Link to='/montagem/trilhas'>
                        <div className='bike'>
                            <img src={Trilhas} alt='mtb'/>
                            <p className='lead'>MTB - TRILHAS</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
