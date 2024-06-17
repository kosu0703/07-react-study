"use client"
import Item from "@/app/item/page";
import axios from "axios";
import { useEffect, useState } from "react";

export default function View(props){
    
    const id = props.params.id;

    const [item, setItem] = useState('');

    const API_URL = `/makeup/v1/products/${id}.json`;

    const getData = () => {
        axios.get(
            API_URL
        ).then(data => {
            console.log(data)
            setItem(data.data);
        })
    }

    useEffect(() => {
        getData();
    }, []);
    
    return(
        <>
            <Item item={item}/>
        </>
    )
}