"use client"

import { AccountCircle } from "@mui/icons-material"
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material"

const drawerWidth = 240

// 메인에서 setSelectedMenu 가 넘어온다.
export default function SideBar({setSelectedMenu}) {

    // 사이드바 메뉴 클릭시 선택된 메뉴를 상태관리에서 업데이트 하자
    const handleMenuClick = (menu) => {
        setSelectedMenu(menu)        
    }

    const drawer = (
        <div>
            <Toolbar />
            <List>
                {/* 상태값을 바꿔서 전달해줘야 한다. */}
                <ListItemButton onClick={() => handleMenuClick("userList")}>
                    <ListItemIcon><AccountCircle/></ListItemIcon>
                    <ListItemText primary="User List" />
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