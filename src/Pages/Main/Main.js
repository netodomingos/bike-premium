import React, { Component } from 'react'

import './styles/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../../Components/Header/Header'
import ProductList from '../../Components/Products/ProductList'

import AwesomeSlider from 'react-awesome-slider'
import  'react-awesome-slider/dist/styles.css';

import bike from './img/bike.jpg'
import caloi from './img/caloi.png'

export default class Main extends Component{

    render(){
        return(
            <React.Fragment>
                <Header/>
                <AwesomeSlider
                    className='awesome-slider aws-btn'
                    cssModule={Main}
                    >
                        <div data-src={bike} />
                        <div data-src={caloi}/>
                </AwesomeSlider>
                <ProductList/>
            </React.Fragment>
        )
    }
}

