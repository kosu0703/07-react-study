"use client"

import axios from "axios"
import { useEffect, useState } from "react"

/* guestBookList 에서 넘어오는 id 는 props 안에 존재한다. */
export default function Detail(props) {

    const idx = props.params.id
    console.log("idx : ", idx)
    /* 정보가 왔으면 부트를 갔다오자 */
    const [item, setItem] = useState({})    /* 여러개 배열이면 [] , 하나의 객체면 {} */

    const API_URL = "/guestbook/detail.do?idx="+idx  /* next.config 파일에서 경로를 축약해줌 */

    const getData = () => {
        axios.get(
            API_URL
        ).then(data => {
            console.log(data.data);
            setItem(data.data)
        }).catch(
            console.log("오류발생")
        );
    }

    /* 화면이 랜더링 될때 처음 한번만 DB 갔다오려면 마지막에 [] 빈배열을 설정 */
    useEffect(() => {
        getData();
    }, []);

    return(
        <>
            <li>{item.name}</li>
            <li>{item.subject}</li>
            <li>{item.email}</li>
            <li>{item.content}</li>
            <li>{item.regdate}</li>
        </>
    )
}