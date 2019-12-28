import React, { Component } from 'react'

import './styles/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../../Components/Header/Header'
import ProductList from '../../Components/Products/ProductList'

export default class Main extends Component{

    render(){
        return(
            <React.Fragment>
                <Header/>
                <ProductList/>
            </React.Fragment>
        )
    }
}

