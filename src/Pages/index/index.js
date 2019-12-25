import React, { Component } from 'react'

import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from '../../Components/Header/Header.js'
import Search from '../../Components/Search-Header/Search.js'

export default class Index extends Component{

    render(){
        return(
            <React.Fragment>
                <Header/>
                <Search/>
            </React.Fragment>
        )
    }
}

