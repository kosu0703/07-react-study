import React, { useState } from 'react'
import ShowState from './ShowState';

const Counter4 = () => {
    const [number, setNumber] = useState(5);
    const [text, setText] = useState('');

    const add = () => {
        //  prevState : 이전 상태값
        setNumber((prevState) => prevState + 1)
    }

    const sub = () => {
        setNumber((prevState) => prevState - 1)
    }

    const onChangeTextHandler = (e) => {
        setText(e.target.value);
    }

    return(
        <div>
            <div>
                <button onClick={add}>+</button>
                <button onClick={sub}>-</button>
                <input 
                    type='text' 
                    placeholder='이름 입력' 
                    onChange={onChangeTextHandler} 
                />
            </div>
            <ShowState number={number} text={text} />
        </div>
    )
}

export default Counter4