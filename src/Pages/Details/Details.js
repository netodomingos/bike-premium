import React, { Component } from 'react'

import Header from '../../Components/Header/Header'
import { ProductConsumer } from '../../Components/Context/Context'
import { Link } from 'react-router-dom'

import './styles/Details.css'

export default class Details extends Component{
    render(){
        return (
            <div className='details'>
                <Header/>
                <ProductConsumer>
                    {(value) => {
                        const { id, img, info, name, price, inCart } = value.detailProduct 
                        return(
                            <div className='containerr'>
                                <div className='imagem'>
                                    <img src={img} />
                                </div>
                                <div className='product'>
                                    <ul>
                                        <li>
                                            <h2 className='title'>{name}</h2>
                                        </li>
                                        <li>    
                                            <h5 className='price'>R$ {price}</h5>
                                        </li>
                                        <li>
                                            <h5 style={{ fontWeight: 'bold' }}>Descrição do Produto</h5>
                                        </li>
                                        <li>
                                            <p className='lead'>{info}</p>
                                        </li>
                                    </ul>
                                    <div className='buttons'>
                                        <Link to='/cart'>
                                            <button className='button cart '
                                                disabled={ inCart ? true : false }
                                                onClick={() => {
                                                    value.addToCart(id)
                                                }}
                                            >
                                                { inCart ? <i class="fas fa-check"></i> : <i className='fas fa-cart-plus'></i> }
                                            </button>
                                        </Link>
                                        <Link to='/'>
                                            <button className='button home' ><i class="fas fa-home"></i></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
