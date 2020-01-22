import React from 'react'
import './cartProduct.css'

export default function cartProduct({item, value}) {

    const { id, name, img, price, total, count } = item
    const { increment, decrement, removeItem } = value

    return (
        <div className='row'>
            <div className='col-10 mx-auto col-lg-4'>
                <div className='produtos-cart'>
                    <img src={img} alt='img' className='imagem-bike mt-5'/>
                    <span className='d-lg-none'>Produto: </span>
                    <h5 className='name-cart mt-5'>{name}</h5>
                </div>
            </div>
            <div className='col-10 mx-auto col-lg-1'>
                <span className='d-lg-none'>Preço:</span>
                <h5 className='price-cart mt-5'>R$ {price}</h5>
            </div>
            <div>
                <div className='col-10 mx-auto col-lg-1 my-2 my-lg-0'>
                    <div className='d-flex justify-content-center'>
                        <button className='botao mt-5 menos'onClick={() => decrement(id)}> - </button>
                        <span className='botao mt-5'onClick={() => increment(id)}>{count}</span>
                        <button className='botao mt-5 mais'onClick={() => increment(id)}> + </button>
                    </div>
                </div>
            </div>
            <div className='col-10 mx-auto col-lg-1 '>
                <button className='mt-5 trash-button botao' onClick={() => removeItem(id)}>
                    <i className='fas fa-trash'></i>
                </button>
            </div>
            <div className='col-10 mx-auto col-lg-1'>
                <span className='d-lg-none'>Total:</span>
                <h5 className='price-cart mt-5'>
                    R$ {total}
                </h5>
            </div>
        </div>
    )
}
