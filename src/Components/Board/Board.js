import React from 'react'
import { ProductConsumer } from '../Context/Context'

import Card from './Card/Card'
import './Board.css'

export default function Board() {
    return (
        <div className='scroll-menu'>
            <div className='products'>
                <ProductConsumer>
                    {value => {
                        return value.products.map( product  => {
                            return <Card key={product.id} product={product} />
                        })
                    }}
                </ProductConsumer>
            </div>
        </div>
    )
}
