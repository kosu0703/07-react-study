import React, { useState } from 'react'

function SelectForm2(props) {

    const [fruit_arr, setFruit_arr] = useState(['']);

    const handleChange = (e) => {
        const selectedFruits 
            = Array.from(e.target.selectedOptions, option => option.value);
        setFruit_arr(selectedFruits);
    }

    const handleSubmit = (e) => {
        console.log(e);
        alert('선택한 과일 : ' , fruit_arr);
        e.preventDefault(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    과일을 선택하세요 (여러개) :
                    <select defaultValue={[fruit_arr]} onChange={handleChange} multiple>
                        <option value="apple">사과</option>
                        <option value="grape">포도</option>
                        <option value="banana">바나나</option>
                        <option value="mango">망고</option>
                    </select>
                </label>
                <button type='submit'>보내기</button>
            </form>
        </div>
    )
}

export default SelectForm2