import React from 'react'

import './styles/Title.css'

function Title({ slogan }) {
    return (
        <div className='title'>
            <h2>{slogan}</h2>
        </div>
    )
}

export default Title
