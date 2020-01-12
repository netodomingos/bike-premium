import React, { Component } from 'react'

import Header from '../../Components/Header/Header'
import { ProductConsumer } from '../../Components/Context/Context'
import ProductSearchPage  from './ProductSearchPage'
import './styles/SearchPage.css'


export default class SearchPage extends Component {


    render(){

        return (
            <div className='search'>
                <Header/>
                <ProductConsumer>
                {   
                value => {
                        return value.products.map( product  => {
                            return (
                                <ProductSearchPage key={product.id} product={product} />
                            )
                        })
                    } }
                </ProductConsumer>
            </div>
        )
    }
}
