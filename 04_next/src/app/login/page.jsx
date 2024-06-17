"use client"

import { Avatar, Button, FormControl, Stack, TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Login() {

    const API_URL = '/api/login'

    // 변경되는 값은 useState 를 사용해야만 바꿀 수 있다.
    const [uvo, setUvo] = useState({
        id : '',
        password : ''
    })
    
    // 텍스트필드를 사용할때 가장 기본
    function changUvo(e){
        setUvo({
            // 기존 uvo 복사
            ...uvo,
            [e.target.name] : e.target.value
        })
    }

    const router = useRouter()

    // 새로고침 할때마다 토큰 체크하기 => 편하게 하는 것이 상태값 주시
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            router.push("/main")
        }
    }, [router])

    async function login(){
        try {
            // axios 서버로 정보 보내기
            const response = await axios.post(API_URL, {
                                                id : uvo.id, 
                                                password : uvo.password
                                            });
            console.log(response.data)
            
            // token 토큰을 로컬 스토리지에 저장
            if (response.data.token) {
                localStorage.setItem('token', response.data.token)
                // 로그인 성공 후 메인 페이지로 리다이렉트
                router.push('/main')
            }

        } catch (error) {
            console.error('로그인 실패 : ', error)
            setUvo({
                id : "",
                password : ""
            })
        }
    }

    return(
        <div style={{width: '80%', margin: '100px auto', paddingTop: '20px', textAlign: 'center'}}>
            <FormControl>
                <Stack direction="column" spacing={1} alignItems='center'>
                    <Avatar sx={{ bgcolor: green[500], marginBottom:'20px'}} />
                    <TextField type='text' label='ID' name='id' fullWidth  autoComplete="off" 
                                onChange={changUvo} />
                    <TextField type='password' label='PW' name='password' fullWidth autoComplete="off" 
                                onChange={changUvo} />
                    <Button fullWidth variant='contained' onClick={login}>Sign in</Button>
                </Stack>
            </FormControl>
        </div>
    )
}