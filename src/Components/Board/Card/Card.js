import React from 'react'

import Product1 from './img/product-1.png'
import './styles/Card.css'

export default function Card() {
    return (
        <div className='cards-extern'>
            <h2>Ofertas da Semana</h2>
            <div className='cards'>
                <div className='cardProducts'>
                    <div className='card-header-products'>
                    <p>Destaque da Semana!</p>
                    </div>
                    <h5><strong>BICICLETA GTS ARO 29</strong> FREIO HIDRÁULICO CÂMBIOS GTS 24 MARCHAS</h5>
                    <img src={Product1} alt='bike'/>
                    <p className='short-description'>BICICLETA GTSM1 É IDEAL PARA QUEM QUER COMEÇAR NO MOUNTAIN BIKE...</p>
                    <p className='price'>1290.00</p>
                </div>

                <div className='cardProducts'>
                    <div className='card-header-products'>
                    <p>Destaque da Semana!</p>
                    </div>
                    <h5><strong>BICICLETA GTS ARO 29</strong> FREIO HIDRÁULICO CÂMBIOS GTS 24 MARCHAS</h5>
                    <img src={Product1} alt='bike'/>
                    <p className='short-description'>BICICLETA GTSM1 É IDEAL PARA QUEM QUER COMEÇAR NO MOUNTAIN BIKE...</p>
                    <p className='price'>1290.00</p>
                </div>

                <div className='cardProducts'>
                    <div className='card-header-products'>
                    <p>Destaque da Semana!</p>
                    </div>
                    <h5><strong>BICICLETA GTS ARO 29</strong> FREIO HIDRÁULICO CÂMBIOS GTS 24 MARCHAS</h5>
                    <img src={Product1} alt='bike'/>
                    <p className='short-description'>BICICLETA GTSM1 É IDEAL PARA QUEM QUER COMEÇAR NO MOUNTAIN BIKE...</p>
                    <p className='price'>1290.00</p>
                </div>

                <div className='cardProducts'>
                    <div className='card-header-products'>
                    <p>Destaque da Semana!</p>
                    </div>
                    <h5><strong>BICICLETA GTS ARO 29</strong> FREIO HIDRÁULICO CÂMBIOS GTS 24 MARCHAS</h5>
                    <img src={Product1} alt='bike'/>
                    <p className='short-description'>BICICLETA GTSM1 É IDEAL PARA QUEM QUER COMEÇAR NO MOUNTAIN BIKE...</p>
                    <p className='price'>1290.00</p>
                </div>
            </div>
        </div>
    )
}
