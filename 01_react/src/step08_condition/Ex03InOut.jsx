//  엘리먼트 변수

function LoginButton(props) {
    return <button onClick={props.onClick}>로그인</button>
}

function LogoutButton(props) {
    return <button onClick={props.onClick}>로그아웃</button>
}

export {LoginButton, LogoutButton}
