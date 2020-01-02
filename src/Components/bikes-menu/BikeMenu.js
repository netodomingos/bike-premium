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
            <div>
                <h3>Escolha seu estilo</h3>
                <div className='bikes'>
                    <Link to='/montagem/asfalto'>
                        <div className='bike'>
                            <img src={Asfalto}/>
                            <p>Asfalto</p>
                        </div>
                    </Link>
                    <Link to='/montagem/bmx'>
                        <div className='bike'>
                            <img src={Bmx}/>
                            <p>BMX</p>
                        </div>
                    </Link>
                    <Link to='/montagem/passeio'>
                        <div className='bike'>
                            <img src={Passeio}/>
                            <p>Passeio</p>
                        </div>
                    </Link>
                    <Link to='/montagem/trilhas'>
                        <div className='bike'>
                            <img src={Trilhas}/>
                            <p>Trilhas</p>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
