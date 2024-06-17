import React from 'react'

function Exam02(props) {
    //  map 으로 반복하므로 , key 값인 idx 를 넣어줘야한다.
    //  이름, 나이는 중복될 수 있기 때문에
    const msg = [
        {
            idx : 1 ,
            name : 'hong' ,
            age : 14 ,
        },
        {
            idx : 2 ,
            name : 'hong' ,
            age : 27 ,
        },
        {
            idx : 3 ,
            name : 'ko' ,
            age : 31 ,
        }
    ]
/* 
    const user = msg.map((k) => {
        return(
            <li key={k.idx}>이름 : {k.name}<br/>나이 : {k.age}<hr/></li>
        )
    })
        
    return (
        <div>
            <ul>{user}</ul>
        </div>
    )
 */
    return(
        <ul>
            {msg.map((k) => {
                return(
                    <li key={k.idx}>{k.name}({k.age})</li>
                )
            })}
        </ul>
    )

}

export default Exam02