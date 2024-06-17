"use client"

import { Divider } from "@mui/material";
import ItemList from "./itemList/page";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

  const [list, setList] = useState([]);

  const API_URL = "/makeup/v1/products.json?brand=maybelline"

  const getData = () => {
      axios.get(
          API_URL
      ).then(data => {
          console.log(data.data);
          setList(data.data);
      }).catch(
          console.log("오류발생")
      )
  }

  useEffect(() => {
      getData();
  }, [])

  return (
    <>
       <div style={{width:"80%", margin:"auto", paddingTop:"20px"}}>
        <h2>베스트 상품</h2>
        <Divider /> {/* 구분선 */}
        <ItemList list={list.slice(0,9)} />
      </div>

      <div style={{width:"80%", margin:"auto", paddingTop:"20px"}}>
        <h2>신상품 상품</h2>
        <Divider /> {/* 구분선 */}
        <ItemList list={list.slice(0,9)} />
      </div>
    </>
  );
}
