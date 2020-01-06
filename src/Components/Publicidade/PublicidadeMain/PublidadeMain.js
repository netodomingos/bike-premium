import React from 'react'

import './styles/PublicidadeMain.css'
import Banner from './img/banner.png'

export default function PublidadeMain() {
    return (
        <div className='banners'>
            <div className='bannersMain'>
                <img src={Banner} alt='banner' />
                <img src={Banner} alt='banner' />
            </div>
            <div className='bannersMain'>
                <img src={Banner} alt='banner' />
                <img src={Banner} alt='banner' />
            </div>
        </div>
    )
}
