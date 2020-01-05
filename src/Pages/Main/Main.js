import React, { Component } from 'react'

import './styles/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../../Components/Header/Header'
import Publicidade from '../../Components/Publicidade/Publicidade'
import Carousel from '../../Components/Carousel/Carousel'
import BikeMenu from '../../Components/bikes-menu/BikeMenu'
// import ProductList from '../../Components/Products/ProductList'
import Card from '../../Components/Card/Card'

export default class Main extends Component{

    render(){
        return(
            <div className='main'>
                <React.Fragment>
                    <Header/>
                    <Publicidade/>
                    <Carousel/>
                    <BikeMenu/>
                    
                    {/* <ProductList/> */}
                    <Card/>

                </React.Fragment>
            </div>
        )
    }
}

