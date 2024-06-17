"use client"
import { Divider, Grid } from '@mui/material';
import axios from "axios";
import { useEffect, useState } from "react"
import Link from 'next/link';

export default function GuestBookList(props){
    
    const [list, setList] = useState([]);

    const API_URL = "/guestbook/list.do";

    const getData = () => {
        axios.get(
            API_URL
        ).then(data => {
            console.log(data.data);
            setList(data.data);
        }).catch(
            console.log("오류발생")
        );
    }

    useEffect(() => {
        getData();
    }, []);
    
    return(
        <div>
            <h2>GuestBookList</h2>
            <Divider />
            {/* 그리드는 항상 컨테이너로 감싸고 맵 안에서 아이템으로 돌아간다. */}
            <Grid container>
                {
                    list.map((k)=>(
                        <Grid item xs={3} key={k.idx}>
                            <li>{k.name} , <Link href={'/detail/' + k.idx}>{k.subject}</Link></li>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}