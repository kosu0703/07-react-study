import React, { useState } from 'react'

//  물 끓는 온도
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>🔥</p>
    }
    return <p>🐳</p>
}

function Calc(props) {

    const [temperature, setTemperature] = useState();

    const handleChange = (e) => {
        setTemperature(e.target.value);
    }
        
    return (
        <div>
            <fieldset>
                <legend>온도를 입력하세요 : </legend>
                <input type='number' value={temperature} onChange={handleChange} />
                <BoilingVerdict celsius={temperature} />
            </fieldset>
        </div>
    )
}

export default Calc