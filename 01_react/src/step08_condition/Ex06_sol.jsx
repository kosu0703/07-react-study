import React, { useState } from 'react'
import Ex06_toolbar from './Ex06_toolbar'

function Ex06_sol(props) {
    //  훅
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    //  함수
    const onClickLogin = () => setIsLoggedIn(true)
    const onClickLogout = () => setIsLoggedIn(false)
    //  컴포넌트
    return (
        <div>
            <Ex06_toolbar  
                isLoggedIn = {isLoggedIn}
                onClickLogin = {onClickLogin}
                onClickLogout = {onClickLogout}
            />
            <div>리액트 공부 ~ (본문)</div>
        </div>
    )
}

export default Ex06_sol