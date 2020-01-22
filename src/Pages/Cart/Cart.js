import React, { Component } from 'react'
import InformationHeader from '../../Components/Header/InformationHeader/InformationHeader'
import Search from '../../Components/Header/Search-Header/Search'
import Title from '../../Components/Title/Title'
import CartColumns from './cartColumns/cartColumns'
import CartList from './cartList/CartList'
import EmptyCart from './empty-cart/EmptyCart'
import CartTotals from './cartList/cartTotals/cartTotals'
import { ProductConsumer } from '../../Components/Context/Context'

import './styles/Cart.css'

export default class Cart extends Component{
    render(){
        return (
            <div className='cart-page'>
                <InformationHeader/>
                <Search/>
                <ProductConsumer>
                    {value => {
                        const { cart } = value

                        if(cart.length > 0){
                            return (
                                <>
                                    <Title slogan='Seu carrinho!' className='title'/>
                                    <div className='cart-organization'>
                                        <div>
                                            <CartColumns/>
                                            <CartList value={value}/>
                                        </div>
                                        <div>
                                            <CartTotals/>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        else{
                            return (
                                <>
                                    <Title slogan='Não possui itens em seu carrinho!' className='title'/>
                                    <EmptyCart/>
                                </>
                            )
                        } 
                    }}
                </ProductConsumer>
              
               
                
            </div>
        )
    }
}