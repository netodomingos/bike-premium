import React, { Component } from 'react'

import InformationHeader from './InformationHeader/InformationHeader'
import  Search  from './Search-Header/Search'
import Navbar from './Navbar/Navbar'

export default class Header extends Component {
    render(){
        return(
            <div>
                <InformationHeader/>
                <Search/>
                <Navbar/>
            </div>
        )
    }

}