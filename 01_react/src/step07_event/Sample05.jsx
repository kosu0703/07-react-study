import React, { useState } from 'react'

function Sample05(props) {
    //  훅
    const [isConfirmed, setIsConfirmed] = useState(false);
    //  버튼 클릭 함수
    const handleConfirmed = () =>  setIsConfirmed(!isConfirmed);
    //  삼항연산자
    return (
        <button onClick={handleConfirmed} disabled={isConfirmed}>
            {isConfirmed ? 'complete' : 'show'}
        </button>
    )
}

export default Sample05