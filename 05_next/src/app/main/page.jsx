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

function Main() {

    const router = useRouter()

    // useContext 훅으로 MobX Store 가져오기
    const menuStore = useContext(MenuContext)

    // 주소값으로 들어올때
    useEffect(() => {
        // 현재 인증 상태는 true 이므로, false 이면 로그인 페이지로 가게 하자
        if (!menuStore.isAuthenticated) {
            router.push("/")
        }
    }, [router, menuStore])

    // 선택된 메뉴에 따라 다른 컴포넌트를 임포트해서 랜더링 하기
    const renderContent = () => {
        switch(menuStore.selectedMenu){
            case "userList" :
                return <UserList />
            case "guestBook" :
                // GuestBook 컴포넌트 랜더링
                return <GuestBook guestBook={menuStore.guestBook} />
            case "adminList" :
                return <AdminList adminList={menuStore.adminList} />
            default :
                return <UserList />
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
}

export default observer(Main)