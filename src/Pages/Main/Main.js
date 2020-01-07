import React, { Component } from 'react'

import './styles/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../../Components/Header/Header'
import PublicidadeHeader from '../../Components/Publicidade/PublicadadeHeader/PublicidadeHeader'
import Carousel from '../../Components/Carousel/Carousel'
import BikeMenu from '../../Components/bikes-menu/BikeMenu'
// import ProductList from '../../Components/Products/ProductList'
import Title from '../../Components/Title/Title'
import Board from '../../Components/Board/Board'
import PublicadadeMain from '../../Components/Publicidade/PublicidadeMain/PublidadeMain'
import Quadrado from '../../Components/Publicidade/PublicidadeQuadrado/Quadrado'
import PublicidadeFinal from '../../Components/Publicidade/PublicadeFinal/PublicidadeFinal'

export default class Main extends Component{

    render(){
        return(
            <div className='main'>
                <React.Fragment>
                    <Header/>
                    <PublicidadeHeader/>
                    <Carousel/>
                    <BikeMenu/>
                    <Title slogan='Destaques da Semana'/> 
                    <Board/>
                    <PublicadadeMain/>
                    <Title slogan='Melhores ofertas para você'/> 
                    <Board/>
                    <Quadrado/>
                    <Title slogan='Para você e sua bike'/> 
                    <Board/>
                    <PublicidadeFinal/>
                    <Board/>
                    
                </React.Fragment>
            </div>
        )
    }
}

