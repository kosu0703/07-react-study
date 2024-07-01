"use client"

import { MenuContext } from "@/stores/StoreContext";
import { Avatar, Button, FormControl, Stack, TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import axios from "axios";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

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
        }else{
            // 리다이렉트 된 url 에 토큰이 있으면
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token')
            console.log("토큰오나 : ", token)
            if(token){
                menuStore.setToken(token)
                // 토큰을 받고 개인정보를 가지러 서버로 다시 간다.
                axios.get('/api/userInfo',{params:{token}})
                    .then(response=>{
                        console.log(response)
                        // 개인정보를 상태값에 저장
                        menuStore.setUserInfo(response.data)
                        router.push("/main")
                    })
                    .catch(error =>{
                        console.error("error")
                    })
            }
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
                menuStore.setUserInfo(response.data.userDetails)
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

    // oauth2 (보안적인 것을 강조해서 인증/인가인데 인증을 강화한 것)
    function handleKakaoLogin(){
        window.location.href = "http://localhost:8080/oauth2/authorization/kakao"
    }
    function handleNaverLogin(){
        window.location.href = "http://localhost:8080/oauth2/authorization/naver"
    }
    function handleGoogleLogin(){
        window.location.href = "http://localhost:8080/oauth2/authorization/google"
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
                    <Button fullWidth variant='contained' onClick={handleKakaoLogin} >카카오 로그인</Button>
                    <Button fullWidth variant='contained' onClick={handleNaverLogin} >네이버 로그인</Button>
                    <Button fullWidth variant='contained' onClick={handleGoogleLogin} >구글 로그인</Button>
                </Stack>
            </FormControl>
        </div>
    )
})

export default Login