import React from 'react'
 
export default function cartColumns() {
    return (
        <div className='text-center d-none d-lg-block'>
            <div className='row'>
                <div className='col-10 mx-auto col-lg-4'>
                    <p className='text-uppercase'>Produtos</p>
                </div>

                <div className='col-10 mx-auto col-lg-1'>
                    <p className='text-uppercase'>Preço</p>
                </div>

                <div className='col-10 mx-auto col-lg-1'>
                    <p className='text-uppercase'>Quantidade</p>
                </div>

                <div className='col-10 mx-auto col-lg-1'>
                    <p className='text-uppercase'>Remover</p>
                </div>

                <div className='col-10 mx-auto col-lg-1'>
                    <p className='text-uppercase'>Total</p>
                </div>
            </div>
        </div>
    )
}
