"use client"

import { MenuContext } from "@/stores/StoreContext";
import { Avatar, Button, FormControl, Stack, TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Login = observer(() => {

    const menuStore = useContext(MenuContext)

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

    // 주소값으로 들어올때 
    useEffect(() => {
        // 로컬 스토리지에 토큰 있는지 없는지 스토어에서 검사
        menuStore.loadToken()
        // 인증 상태가 true 이면 로그인 한것이므로 메인페이지 이동
        if (menuStore.isAuthenticated) {
            router.push("/main")
        }
    }, [router, menuStore])

    async function login(){
        try {
            // axios 서버로 정보 보내기
            const response = await axios.post(API_URL, {
                                                id : uvo.id, 
                                                password : uvo.password
                                            });
            console.log(response.data)
            
            // 토큰을 가지고 스토어로 가서 처리
            if (response.data.token) {
                menuStore.setToken(response.data.token)
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
})

export default Login