import React, { useState } from 'react'

function Counter() {
    //  함수는 state 를 제공하지 않아서 화면이 바뀌지 않는다.
    //let count = 0 ;

    //  그래서 useState() 훅 hook 을 사용한다. 
    //const [변수명, set변수명(첫글자 대문자)] = useState(초기값);
    const [count, setCount] = useState(0);
  return (
    <div>
        <p>총 {count} 번 클릭 했습니다.</p>
        <button onClick={() => {
            //count++ ; 
            //console.log("count : ", count) ;

            setCount(count + 1);
            }}>클릭</button>
    </div>
  )
};

export default Counter

