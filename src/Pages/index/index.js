import React, { Component } from 'react'

import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../../Components/Header/Header'

export default class Index extends Component{

    render(){
        return(
            <React.Fragment>
                <Header/>
            </React.Fragment>
        )
    }
}

