import React from 'react'

const scaleName = {
    c : '섭씨' ,
    f : '화씨'
}

function Calc4Sub(props) {

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

export default Calc4Sub