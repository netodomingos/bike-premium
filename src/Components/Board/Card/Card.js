import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../Context/Context'

import './styles/Card.css'

export default class Card extends Component {
    render(){

        const { id, title, name , img, price, shortDescription, inCart } = this.props.product

        return (
            <div className='cards-extern col-9 mx-auto col-md-6 col-lg-3'>
                <Link to='/details' style={{textDecoration: 'none'}}>
                    <div className='cards1'>
                        <div className='cardProducts' onClick={() => {
                            console.log('clicked on the card');
                        }}>
                                <div className='card-header-products'>
                                    <p>{title}</p>
                                </div>
                                <h5><strong>{name}</strong></h5>
                                    <img src={img} alt='bike'/>
                                <p className='short-description'>{shortDescription}</p>
                                <p className='price'>{price}</p>
                                <button
                                    className='cart-btn'
                                    disabled={inCart ? true : false }
                                    onClick={() => {
                                        console.log('added to cart');
                                    }}
                                >
                                    { inCart ? (
                                        <p>
                                            Adicionado no Carrinho!
                                        </p>
                                    ) : (
                                        <i className='fas fa-cart-plus'></i>
                                    )}
                                </button>
                        </div>
                    </div>
                            </Link>
            </div> 
        )
    }   
}
