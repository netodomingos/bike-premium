import React from 'react'

import './Styles/Publicidade.css'
import Propaganda from './img/propaganda.png'

export default function Publicidade() {
    return (
        <div className='propagandas'>
            <img src={Propaganda} alt='propaganda' />
            <img src={Propaganda} alt='propaganda' />
            <img src={Propaganda} alt='propaganda' />
            <img src={Propaganda} alt='propaganda' />
            <img src={Propaganda} alt='propaganda' />
        </div>
    )
}
