import React, { useState } from 'react'

const scaleName = {
    c : '섭씨' ,
    f : '화씨'
}

//  물 끓는 온도
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>🔥</p>
    }
    return <p>🐳</p>
}

function TemperatureInput(props) {
    
    const handleChange = (e) => {
        props.onTemperatureChange(e.target.value);
    }
    
    return (
        <div>
            <fieldset>
                <legend>온도를 입력하세요(단위 : {scaleName[props.scale]})</legend>
                <input 
                    type='number' 
                    value={props.temperature} 
                    onChange={handleChange} />
            </fieldset>
        </div>
    )
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

function Calc3(props) {
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
        <TemperatureInput scale={scale} temperature={celsius} 
                        onTemperatureChange={handleCelsiusChange} />
        <TemperatureInput scale={scale} temperature={fahrenheit} 
                        onTemperatureChange={handleFahrenheitChange} />
        <BoilingVerdict celsius={celsius} />
    </div>
  )
}

export default Calc3