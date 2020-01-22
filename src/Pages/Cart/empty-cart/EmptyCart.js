import React,{ Component } from 'react'
import Empty from './img/empty.svg'
import { Link } from 'react-router-dom'

import './styles/EmptyCart.css'

export default class EmptyCart extends Component {
    render(){
        return (
            <>
                <div className='container-cart'>
                    <img src={Empty} className='img-cart'/>
                </div>
                <div className='container-cart-button'>
                    <Link to='/'>
                        <button className='btn btn-success'>
                            Volte para o menu principal!
                        </button>
                    </Link>
                </div>
            </>
        )
    }
}