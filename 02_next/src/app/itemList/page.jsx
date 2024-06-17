"use client"
import { Divider, Grid } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import './itemList.css';

export default function ItemList() {

    //  상품 정보 리스트를 저장하기 위해서
    const [list, setList] = useState([]);
    //  실제주소 : https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline
    const API_URL = "/makeup/v1/products.json?brand=maybelline";

    const getData = () => {
        axios.get(
            API_URL
        ).then(data => {
            console.log(data.data);
            setList(data.data);
        })
    }

    //  렌더링 될 때마다 실행
    //useEffect(()=>{getData()});

    //  최초 한번만 실행 (빈 배열 사용)
    useEffect(() => {
        getData();
    }, []);

    return(
        <div style={{ width : "80%" , margin : "auto", paddingTop : "20px" }}>
            <h2>베스트 상품</h2>
            {/* 구분선 */}
            <Divider />
            <Grid container>
                {
                    list.map((k) => (
                        <Grid item xs={3} key={k.id}>
                            <Link href={'/view/' + k.id}>
                            <img alt={k.name} src={k.image_link} className="img_item" />
                            <strong>{k.name}</strong>
                            <span className="txt_info">{k.category}&nbsp;{k.product_type}</span>
                            <strong className="num_price">{k.price}</strong>
                            </Link>
                        </Grid>        
                    ))
                }
            </Grid>
        </div>
    )
}