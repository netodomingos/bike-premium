import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import { ProductConsumer }  from '../../Components/Context/Context'

import Product from '../../Components/Board/Card/Product'

export default function SearchPage({ match }){
    // const { id } = match.params.id
    return (
         <>
            <Header/>
            <ProductConsumer>
                {(value) => {
                    if( match.params.id == value.products.name){
                        return value.products.map(product => {
                            return (
                                <Product key={product.id} product={product} />
                            )
                        })
                    }
                    else{
                        return (
                            <h1>Não encontramos o que você buscou!</h1>
                        )
                    }
                }}
            </ProductConsumer>
        </>
    )
}
