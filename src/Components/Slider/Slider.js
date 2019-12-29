import React from 'react'

import AwesomeSlider from 'react-awesome-slider'
import AwesomeSliderStyles from 'react-awesome-slider'

export default Slider = () => {
    
    return(
        <AwesomeSlider
        cssModule={AwesomeSliderStyles} 
        play={true}>
            <div data-src="./img/"/>
            <div data-src='./img/bike.png'/>
        </AwesomeSlider>
    )
}