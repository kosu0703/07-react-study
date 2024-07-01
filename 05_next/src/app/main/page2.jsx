"use client"

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import TopBar from "../topBar/page";
import SideBar from "../sideBar/page";
import UserList from "../userList/page";
import GuestBook from "../guestBook/page";
import AdminList from "../adminList/page";
import { observer } from "mobx-react-lite";
import { MenuContext } from "@/stores/StoreContext";
import UserDetail from "../userDetail/page";

// 보통은 옵저버로 전체를 감싸서, 이것을 상태관리하고 있어라고 사용한다.
const Main = observer(() => {
    
    // useContext 훅으로 MobX Store 가져오기
    const menuStore = useContext(MenuContext)

    const router = useRouter()

    // 새로고침 할때마다 토큰 체크하기 => 편하게 하는 것이 상태값 주시
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            router.push("/")
        }
    }, [router])

    // 선택된 메뉴에 따라 다른 컴포넌트를 임포트해서 랜더링 하기
    const renderContent = () => {
        switch(menuStore.selectedMenu){
            case "userDetail" :
                return <UserDetail />
            case "guestBook" :
                return <GuestBook />
            case "adminList" :
                return <AdminList />
            default :
                return <UserDetail />
        }
    }

    return(
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

            <TopBar sideBarOpen={menuStore.sideBarOpen} />

            <div style={{ display: 'flex', flex: 1 }}>

                {/* menuStore 를 이용해서 가져오기, 사이드바 컴포넌트에는 props 를 전달할 필요가 없다. */}
                {menuStore.sideBarOpen && <SideBar />}

                <div style={{ flex: 1, padding: '20px', backgroundColor: '#ffffff' , marginTop: '100px'}}>
                    {/* 선택된 메뉴에 따라 컴포넌트를 랜더링한다. */}
                    {renderContent()}
                </div>

            </div>

        </div>
    )
})

export default Main