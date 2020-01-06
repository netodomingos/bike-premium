import React from 'react'

import Banner from './img/Banner.png'
import './style/Quadrado.css'

export default function Quadrado() {
    return (
        <div>
            <div className='banner'>
                <img src={Banner}/>
                <img src={Banner}/>
                <img src={Banner}/>
                <img src={Banner}/>
            </div>
        </div>
    )
}
