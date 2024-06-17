import React, { useState } from 'react'
import Calc4Sub from './Calc4Sub'

//  물 끓는 온도
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>🔥</p>
    }
    return <p>🐳</p>
}

//  섭씨 , 화씨 변환
function toCelsius(fahrenheit){
    return (
        (fahrenheit - 32) * 5 / 9
    )
}
function toFahrenheit(celsius){
    return (
        (celsius * 9 / 5) + 32
    )
}

function Calc4(props) {
    const [temperature, setTemperature] = useState();
    const [scale, setScale] = useState();

    //  섭씨 , 화씨 구분
    const handleCelsiusChange = (temperature) => {
        setTemperature(temperature);
        setScale('c');
    }
    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale('f');
    }

    //  섭씨 , 화씨 값 넣기
    const celsius = scale === 'f' ? toCelsius(temperature) : temperature ;
    const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature ;

    return (
        <div>
        <Calc4Sub scale='c' temperature={celsius} onTemperatureChange={handleCelsiusChange} />
        <Calc4Sub scale='f' temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
        <BoilingVerdict celsius={celsius} />
        </div>
    )
}

export default Calc4