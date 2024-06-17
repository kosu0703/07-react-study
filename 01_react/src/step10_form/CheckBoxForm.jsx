import React, { useState } from 'react'

function CheckBoxForm(props) {
    
    const [selectedFruits, setSelectedFruits] = useState([])

    const handleChange = (e) => {
        //  이벤트가 발생한 것의 value 와 checked 를 뽑아낸다.
        //  즉, 체크된 경우에는 선택된 과일을 selectedFruits 추가, 아닌 경우는 제거
        const {value, checked} = e.target;

        if (checked) {
            //  기존 체크된 배열에 추가된다.
            //  ...selectedFruits => selectedFruits 복사본 하나 만든다.
            setSelectedFruits([...selectedFruits, value]);
        }else{
            //  selectedFruits 배열에서 하나씩 꺼낸 k 가 value 와 같지 않은 경우 필터링 하겠다.
            //  체크안된 것들과 같지않으면 걸러내겠다 => 체크된 것들만 걸러내겠다
            setSelectedFruits(selectedFruits.filter(k => k !== value));
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(e.target.value);
        console.log("선택한 과일 : " , selectedFruits);
    }

    //  checked={selectedFruits.includes('apple')} 
    //  selectedFruits 배열 안에 apple 있으면 true, 없으면 false
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type='checkbox' value='apple' 
                    checked={selectedFruits.includes('apple')} 
                    onChange={handleChange} /> 사과
            </label>
            <br/>
            <label>
                <input type='checkbox' value='grape' 
                    checked={selectedFruits.includes('grape')} 
                    onChange={handleChange} /> 포도
            </label>
            <br/>
            <label>
                <input type='checkbox' value='banana' 
                    checked={selectedFruits.includes('banana')} 
                    onChange={handleChange} /> 바나나
            </label>
            <br/>
            <label>
                <input type='checkbox' value='mango' 
                    checked={selectedFruits.includes('mango')} 
                    onChange={handleChange} /> 망고
            </label>
            <br/>
            <button type='submit'>보내기</button>
        </form>
    )
}

export default CheckBoxForm