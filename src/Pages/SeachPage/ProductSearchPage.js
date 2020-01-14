import React, { Component } from 'react'
import { searchTerm } from '../../Components/Header/Search-Header/Search'

export default class ProductSearchPage extends Component {
    render() {

        console.log(searchTerm)
        const { name, company } = this.props.product
        
        return (
            <div>

                <div>
                    { name }, 
                </div>
                
                <div>
                    { company }
                </div>
            </div>
        )
    }
}
