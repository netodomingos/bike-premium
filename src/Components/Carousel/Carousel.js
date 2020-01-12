import React, { Component } from 'react'
import { Carousel as CarouselBootStrap, CarouselItem } from 'react-bootstrap'

import './styles/Carousel.css'
import Bike from './img/bike.jpg'

export default class Carousel extends Component {

    render() {
        return (
            <CarouselBootStrap>
                <CarouselItem>
                    <img src={Bike} height={500} alt='bike'/>
                </CarouselItem>
                <CarouselItem>
                    <img src={Bike} height={500} alt='bike' />
                </CarouselItem>
                <CarouselItem>
                    <img src={Bike} height={500} alt='bike' />
                </CarouselItem>
            </CarouselBootStrap>
        )
    }
}
