import React from 'react'
import CartProduct from './cart-product/cartProduct'

export default function CartList({value}) {
    const { cart } = value
    return (
        <div>
            {
                cart.map(item => {
                    return <CartProduct key={item.id} item={item} value={value} />
                })
            }
        </div>
    )
}
