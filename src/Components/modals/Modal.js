import React, { Component } from 'react'
import { ProductConsumer } from '../Context/Context'
import { Link } from 'react-router-dom'

import './styles/Modal.css'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer >
                {(value) => {
                    const  { modalOpen, closeModal } = value

                    const { img, name, price } = value.modalProduct

                    if(!modalOpen){
                        return null
                    }
                    else {
                        return(
                            <div className='modal-container'>
                                <div className='containerr'>
                                    <div className='text-center text-capitalize p-5' id='modal'>
                                        <div className='informations'>
                                            <h5 className='title-1'>Produto Adicionado ao Carrínho!</h5>
                                            <img src={img} alt='img' className='img-fluid'/>
                                            <h5 className='title-2'>{name}</h5>
                                            <h5 className='price'>R$ {price}</h5>
                                            <Link to='/'>
                                                <button onClick={() => closeModal()} className='button-modal primeiro'>
                                                    Continuar com as compras!
                                                </button>
                                            </Link>
                                            <Link to='/cart' >
                                                <button onClick={() => closeModal()} className='button-modal segundo '>
                                                    Ir para o Carrínho!
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
