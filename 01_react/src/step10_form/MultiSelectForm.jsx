import React, { useState } from "react";

function MultiSelectForm(props){
    
    const [fruitName, setFruitName] = useState([]);

    const handleChange = (e) => {
        const fruitArr = Array.from(e.target.selectedOptions, option => option.value);
        setFruitName(fruitArr);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(e.target.value);
        console.log("선택한 과일 : " , fruitName);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>과일을 여러개 선택할 수 있습니다
                <select value={fruitName} onChange={handleChange} multiple >
                    <option value="apple">사과</option>
                    <option value="grape">포도</option>
                    <option value="banana">바나나</option>
                    <option value="mango">망고</option>
                </select>
            </label>
            <button type="submit">보내기</button>
        </form>
    )
}

export default MultiSelectForm