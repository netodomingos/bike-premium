import React from 'react'
import { ProductConsumer } from '../Context/Context'

import Card from './Card/Card'

export default function Board() {
    return (
        <div>
            <ProductConsumer>
                {value => {
                    return value.products.map( product  => {
                        return <Card key={product.id} product={product} />
                    })
                }}
            </ProductConsumer>
        </div>
    )
}
