import React from 'react'

//  단축평가 : 조건1 && 조건2 일때 조건1 이 false 이면 조건2 는 처리하지 않는다.
function Ex04(props) {

    const msg = props.msg; 

    return (
        <div>
            <h1>안녕하세요!</h1>
            {
                msg.length > 0 && 
                <h2>현재 {msg.length} 개의 읽지 않은 메시지가 있습니다.</h2>
            } 
        </div>
        //  msg.length 가 false 면 h2 태그는 실행되지 않는다.
        //  msg.length 가 true 일때만 h2 태그가 보인다.
    )
}

export default Ex04