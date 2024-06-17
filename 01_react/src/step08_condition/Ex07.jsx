import React, { useState } from 'react'
import Ex07Sub from './Ex07Sub'

function Ex07(props) {
    //  훅
    const [showWarning, setShowWarning] = useState(false)
    //  함수
    const handleToggleClick = () => setShowWarning(!showWarning)
    //  컴포넌트
    return (
        <div>
            <Ex07Sub warning={showWarning} />
            <button onClick={handleToggleClick}>{showWarning ? '감추기' : '보이기'}</button>
        </div>
    )
}

export default Ex07