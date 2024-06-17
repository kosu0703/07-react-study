import React, { useState } from 'react'
import Ex02 from './Ex02'
import { LoginButton, LogoutButton } from './Ex03InOut'

function Ex05(props) {
    //  훅
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    //  함수
    const handleLoginClick = () => setIsLoggedIn(true)
    const handleLogoutClick = () => setIsLoggedIn(false)
    //  삼항연산자
    return (
        <div>
            <Ex02 isLoggedIn={isLoggedIn} />
            { 
                isLoggedIn  ? <LogoutButton onClick={handleLogoutClick} /> 
                            : <LoginButton onClick={handleLoginClick} />   
            }
        </div>
    )
}

export default Ex05
