import React, { useState } from 'react'

function RadioButtonForm(props) {

    const [selectedFruit, setSelectedFruit] = useState();

    const handleChange = (e) => {
        setSelectedFruit(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('선택한 과일 : ' , selectedFruit);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type='radio' value='apple' 
                    checked={selectedFruit === 'apple'} 
                    onChange={handleChange} />사과
            </label>
            <br/>
            <label>
                <input type='radio' value='grape'
                    checked={selectedFruit === 'grape'} 
                    onChange={handleChange} />포도
            </label>
            <br/>
            <label>
                <input type='radio' value='banana' 
                    checked={selectedFruit === 'banana'} 
                    onChange={handleChange} />바나나
            </label>
            <br/>
            <label>
                <input type='radio' value='mango' 
                    checked={selectedFruit === 'mango'} 
                    onChange={handleChange} />망고
            </label>
            <br/>
            <button type='submit'>보내기</button>
        </form>
    )
}

export default RadioButtonForm