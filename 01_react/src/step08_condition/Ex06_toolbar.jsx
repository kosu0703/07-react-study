import React from 'react'

//  스타일 지정
const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

function Ex06_toolbar(props) {
    //  props 로 3가지를 받아서 처리
    const {isLoggedIn, onClickLogin, onClickLogout} = props;
    //  로그인여부 , 로그인버튼 클릭 , 로그아웃버튼 클릭
    return (
        //  로그인 했을때만 환영합니다! 표시
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}>환영합니다!</span>}
            {
                isLoggedIn  ? <button onClick={onClickLogout}>로그아웃</button>
                            : <button onClick={onClickLogin}>로그인</button>
            }
        </div>
        //  로그인 했을때 로그아웃 버튼
        //  로그인 안했을때 로그인 버튼
    )
}

export default Ex06_toolbar