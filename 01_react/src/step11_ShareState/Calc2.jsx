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

    const [temperature, setTemperature] = useState();

    const handleChange = (e) => {
        setTemperature(e.target.value);
    }
        
    return (
        <div>
            <fieldset>
                <legend>온도를 입력하세요(단위 : {scaleName[props.scale]})</legend>
                <input 
                    type='number' 
                    value={temperature} 
                    onChange={handleChange} />
                <BoilingVerdict celsius={temperature} />
            </fieldset>
        </div>
    )
}

function Calc2(props) {
    return(
        <div>
            <TemperatureInput scale='c' />
            <TemperatureInput scale='f' />
        </div>
    )
}

export default Calc2