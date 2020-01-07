import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../../Context/Context'

import './styles/Card.css'

export default class Card extends Component {
    render(){

        const { id, title, name , img, price, shortDescription, inCart } = this.props.product

        return (
            <div className='cards-extern'>
                  <h2>Ofertas da Semana</h2>
                    <div className='cards'>
                        <div className='cardProducts'>
                            <Link to='/detail' style={{textDecoration: 'none'}}>
                                <div className='card-header-products'>
                                <p>{title}</p>
                                </div>
                                <h5><strong>{name}</strong></h5>
                                    <img src={img} alt='bike'/>
                                <p className='short-description'>{shortDescription}</p>
                                <p className='price'>{price}</p>
                            </Link>
                        </div>
                    </div>
            </div> 
        )
    }   
}
