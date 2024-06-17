"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TopBar from "../topBar/page";
import SideBar from "../sideBar/page";
import UserList from "../userList/page";
import GuestBook from "../guestBook/page";
import AdminList from "../adminList/page";

export default function Main({children}) {

    const router = useRouter()

    // 사이드바 메뉴선택 상태관리 : 초기값 userList
    const [selectedMenu, setSelectedMenu] = useState("userList")

    // 사이드바에 대한 상태관리 : 초기값 true => 열린상태
    const [sideBarOpen, setSideBarOpen] = useState(true)

    // 새로고침 할때마다 토큰 체크하기 => 편하게 하는 것이 상태값 주시
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            router.push("/")
        }
    }, [router])

    // 선택된 메뉴에 따라 다른 컴포넌트를 임포트해서 랜더링 하기
    const renderContent = () => {
        switch(selectedMenu){
            case "userList" :
                return <UserList />
            case "guestBook" :
                return <GuestBook />
            case "adminList" :
                return <AdminList />
            default :
                return <UserList />
        }
    }

    return(
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

            <TopBar setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen} />

            <div style={{ display: 'flex', flex: 1 }}>

                {/* 사이드바가 열리면 SideBar 컴포넌트를 랜더링하고, 메뉴 선택상태를 prop 으로 전달한다. */}
                {sideBarOpen && <SideBar setSelectedMenu={setSelectedMenu} />}

                <div style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff' , marginTop: '100px'}}>
                    {/* 선택된 메뉴에 따라 컴포넌트를 랜더링한다. */}
                    {renderContent()}
                </div>

            </div>

        </div>
    )
}