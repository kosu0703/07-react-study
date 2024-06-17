"use client"
import Item from "@/app/item/page";
import axios from "axios";
import { useEffect, useState } from "react";

export default function View(props){
    const id = props.params.id;

    //  상품 정보 한개 저장하기 위해서
    const [item, setItem] = useState('');
    //  EL 과 스트링 같이 쓰기위해 `` backtick 사용
    //  실제주소 : https://makeup-api.herokuapp.com/api/v1/products/488.json
    const API_URL = `/makeup/v1/products/${id}.json`;
    const getData = () => {
        axios.get(
            API_URL
        ).then(data => {
            console.log(data.data);
            setItem(data.data);
        })
    }

    //  렌더링 될 때마다 실행
    //useEffect(()=>{getData()});

    //  최초 한번만 실행 (빈 배열 사용)
    useEffect(() => {
        getData();
    }, []);

    return(
        <div>
            {/* 아이템을 표현하는 페이지를 별도로 만들었으므로 임포트 하자 */}
            <Item item = {item} />
        </div>
    )
}