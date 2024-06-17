import React, { useState } from 'react'

function Sample02(props) {

    //  상태변화가 있으면 state 가 있어야하는데 
    //  함수에서는 훅을 사용한다.
    const [isToggleOn, setIsToggleOn] = useState(true);

    //  화살표 함수 사용
    const handleClick = () => setIsToggleOn(!isToggleOn); //  반대로 바꿔주세요

    return (
        <button onClick={handleClick}>{isToggleOn ? 'on' : 'off'}</button>
    )
}

export default Sample02