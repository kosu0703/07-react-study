import React, { useState } from "react";

function NameForm(props) {

    const [m_name, setM_name] = useState('')
    
    const handleChange = (e) => {
                                //  대문자로
        setM_name(e.target.value.toUpperCase())
    }

    const handleSubmit = (e) => {
        alert('입력한 이름 : ' + m_name);
        //  어떤 이벤트를 명시적으로 처리하지 않을 경우,
        //  해당 이벤트에 대한 기본동작을 실행하지 않도록 지정한다.
        //  a 태그, submit 을 통한 이동이나 새로고침을 막아준다.
        e.preventDefault();
    }

    return(
        //  form 은 state 에서 관리해야 한다.
        //  인풋태그에서 value={m_name} 값이 훅으로 넘어간다.
        <form onSubmit={handleSubmit}>
            <label>이름 : 
                <input type="text" value={m_name} onChange={handleChange} />
            </label>
            <button type="submit">보내기</button>
        </form>
    )
}

export default NameForm