import React, { Component } from 'react'

export default class ProductSearchPage extends Component {
    render() {

        const { name, company } = this.props.product
        
        return (
            <div>

                <div>
                    { name }
                </div>
                
                <div>
                    { company }
                </div>
            </div>
        )
    }
}
