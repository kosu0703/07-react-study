"use client"

import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/navigation";

// 현재상태는 sideBarOpen 으로 확인하고 너비를 조절,
// 버튼을 눌렀을때는 상태를 변경해주기 위해 setSideBarOpen 가 필요
export default function TopBar({sideBarOpen, setSideBarOpen}){
                                // 현재         // 변경
    const router = useRouter()

    const handleLogout = async () => {
        await axios.post("/api/logout", {}, {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem("token")}`
            }
        })
        localStorage.removeItem("token")
        router.push("/")
    }

    const handleDrawerToogle = () => {
        setSideBarOpen(!sideBarOpen)
    }

    return(
        <AppBar position="fixed" sx={{ width: `calc(100% - ${sideBarOpen ? '240px' : 0})` }}>
            <Toolbar>
                {/* 상단바 너비 조절 ( 사이드바 on/off ) */}
                <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToogle}
                        sx={{ mr: 2 }} 
                        >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Dashboard
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
    )
}