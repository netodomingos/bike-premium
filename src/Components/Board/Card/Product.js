import React from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../Context/Context'

import './styles/Card.css'

 class Product extends React.Component{
    render(){

        const { id, title, name , img, price, shortDescription, inCart } = this.props.product

        return (
            <div className='cards-extern col-9 mx-auto col-md-6 col-lg-3'>
                    <div className='cards1'>
                        <ProductConsumer>
                            {(value) => (
                                <div className='cardProducts' onClick={() => {
                                    value.handleDetail(id)
                                }}>
                                <div className='card-header-products'>
                                    <p>{title}</p>
                                </div>
                                    <h5>
                                        <strong>{name}</strong>
                                    </h5>
                                    <Link to='/details'>
                                        <img src={img} alt='bike'/>
                                    </Link>
                                    <p className='short-description'>{shortDescription}</p>
                                    <div className='price-and-cart'>
                                    <p className='price'>{price}</p>
                                        <button
                                            className='cart-btn'
                                            disabled={inCart ? true : false }
                                            onClick={() => {
                                                value.addToCart(id)
                                                value.openModal(id)
                                            }}
                                        >
                                            { inCart ? (
                                                <p className='cart-text' s style={{color: '#fff'}}>
                                                    <i class="fas fa-check"></i>
                                                </p>
                                            ) : (
                                                <i className='fas fa-cart-plus'></i>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </ProductConsumer>
                    </div>
            </div> 
        )
    }   
}


export default Product


