import React from "react";

//  이벤트 핸들러에 매개변수를 전달하는 방법
function Sample03(props) {
    
    const handleDelete = (id, event) => {
        console.log("id : " , id);
        //  태그 전체 볼때
        console.log("event.target : " , event.target);
        //  글자만 빼낼때
        console.log("event.target : " , event.target.innerText);
        console.log("event.target : " , event.target.textContent);
    }

    return(
        //  매개변수가 있으면 onClick 안에서 화살표 함수
        <button onClick={(event) => handleDelete(1, event)}>눌러주세요</button>
    )
}

export default Sample03