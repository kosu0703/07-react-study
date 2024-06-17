"use client"
import { Avatar, Button, FormControl, Stack, TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import axios from "axios";
import { useState } from "react";

export default function Join(){

    const [uvo, setUvo] = useState({
        m_id : '',
        m_pw : '',
        m_name : '',
        m_age : ''
    });

    function changeUvo(e){
        setUvo({
            ...uvo,
            [e.target.name] : e.target.value
        });
    }

    const API_URL = "/members/join.do";

    function join(){
        if (uvo.m_id != '' && uvo.m_pw != '' && uvo.m_name != '' && uvo.m_age != '') {
            axios.post(
                API_URL, null, {params : {
                    m_id : uvo.m_id,
                    m_pw : uvo.m_pw,
                    m_name : uvo.m_name,
                    m_age : uvo.m_age
                }}
            ).then(data => {
                console.log(data);
                if (data.data === 1) {
                    alert("회원가입 성공! 로그인해주세요");
                    location.href = "/login";
                }else{
                    alert("회원가입 실패");
                    return;
                }
            })
        }else{
            alert("모든 값을 입력해주세요!");
            return;
        }
    }
        
    return(
        <div style={{width:"80%", margin:"auto", paddingTop:"30px", textAlign:"center" }}>
            <FormControl>
                <Stack direction="column" spacing={1} alignItems='center'>
                    <Avatar sx={{ bgcolor: green[500], marginBottom:'20px'}} />
                    <TextField type='text' label='ID' name='m_id' fullWidth required onChange={changeUvo}/>
                    <TextField type='password' label='PW' name='m_pw' fullWidth required onChange={changeUvo}/>
                    <TextField type='text' label='NAME' name='m_name' fullWidth required onChange={changeUvo}/>
                    <TextField type='number' label='AGE' name='m_age' fullWidth required onChange={changeUvo}/>
                    <Button fullWidth variant='contained' onClick={join}>회원가입하기</Button>
                </Stack>
            </FormControl>
        </div>
    )
}