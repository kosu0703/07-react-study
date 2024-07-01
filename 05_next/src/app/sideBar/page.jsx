"use client"

import { MenuContext } from "@/stores/StoreContext"
import { AccountCircle } from "@mui/icons-material"
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"
import axios from "axios"
import { observer } from "mobx-react-lite"
import { useContext } from "react"

const drawerWidth = 240

// 메인에서 setSelectedMenu 가 넘어온다.
function SideBar() {

    const menuStore = useContext(MenuContext)

    // 사이드바 메뉴 클릭시 선택된 메뉴를 상태관리에서 업데이트 하자
    const handleMenuClick = async (menu) => {
        menuStore.setSelectedMenu(menu)     
        
        if(menu === 'guestBook'){
            try {
                const response = await axios.get('/api/guestbook', {
                    headers : {
                        Authorization : `Bearer ${menuStore.token}`
                    }
                })
                // 가지고 온 리스트를 MobX 에 저장하자 
                menuStore.setGuestBook(response.data)
            } catch (error) {
                alert('실패')
            }
        }else if (menu === 'adminList') {
            try {
                const response = await axios.get('/api/adminlist', {
                    headers : {
                        Authorization : `Bearer ${menuStore.token}`
                    }
                })
                menuStore.setAdminList(response.data)
            } catch (error) {
                alert('실패')
            }
        }
    }

    const drawer = (
        <div>
            <Toolbar />
            <List>
                {/* 상태값을 바꿔서 전달해줘야 한다. */}
                <ListItemButton onClick={() => handleMenuClick("userDetail")}>
                    <ListItemIcon><AccountCircle/></ListItemIcon>
                    <ListItemText primary="User Detail" />
                </ListItemButton>
                <ListItemButton onClick={() => handleMenuClick("guestBook")}>
                    <ListItemIcon><AccountCircle/></ListItemIcon>
                    <ListItemText primary="Guest Book" />
                </ListItemButton>
                <ListItemButton onClick={() => handleMenuClick("adminList")}>
                    <ListItemIcon><AccountCircle/></ListItemIcon>
                    <ListItemText primary="Admin List" />
                </ListItemButton>
            </List>
        </div>
    )

    return(
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    )
}

export default observer(SideBar)