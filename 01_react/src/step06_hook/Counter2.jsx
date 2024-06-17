import React, { useState } from 'react'

function Counter2(props) {
    //  숫자 증가
    const[count2, setCount2] = useState(0);
    
    function countUp(){
        setCount2(count2 + 1);
    }

    //  이름 변경
    const[name, setName] = useState('hong');

    function changeName(){
        const newName = name === 'hong' ? 'kim' : 'hong' ;
        setName(newName);
    }

    return (
        <div>
            <div>{count2}</div>
            <button onClick={countUp}>증가</button>
            <hr />
            <h2>{name}</h2>
            <button onClick={changeName}>이름변경</button>
        </div>
    )
}

export default Counter2

