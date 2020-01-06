import React from 'react'

import BannerLargo from './img/BannerLargo.png'
import BannerPequeno from './img/BannerPequeno.png'

import './styles/PublicidadeFinal.css'

export default function PublicidadeFinal() {
    return (
        <div>
            <div className='banners'>
                <img src={BannerLargo} alt='Banner'/>
                <img src={BannerLargo} alt='Banner'/>
            </div>
            <div className='banners'>
                <img src={BannerPequeno} alt='Banner'/>
                <img src={BannerPequeno} alt='Banner'/>
                <img src={BannerPequeno} alt='Banner'/>
            </div>
        </div>
    )
}
