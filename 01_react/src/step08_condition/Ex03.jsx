import React, { useState } from 'react'
import { LoginButton, LogoutButton } from './Ex03InOut';
import Ex02 from './Ex02';

//  isLogged 의 따라서 button 변수의 컴포넌트가 달라진다
function Ex03(props) {
    //  훅
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    //  함수
    const handleLoginClick = () => setIsLoggedIn(true)
    const handleLogoutClick = () => setIsLoggedIn(false)
    //  if문
    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={handleLogoutClick} />
    }else{
        button = <LoginButton onClick={handleLoginClick} />
    }
    //  결과
    return (
        <div>
            <Ex02 isLoggedIn={isLoggedIn} />{button}
        </div>
    )
}

export default Ex03