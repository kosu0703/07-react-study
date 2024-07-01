import { makeAutoObservable } from "mobx"

class MenuStore {
    // 메뉴 선택
    selectedMenu = "userDetail"
    // 사이드바 on/off
    sideBarOpen = true
    // 사용자 인증 상태
    isAuthenticated = false
    // 사용자 토큰
    token = null
    // 방명록 리스트
    guestBook = []
    // 관리자 리스트
    adminList = []
    // 유저 정보
    userInfo  ={
        id : '',
        name : '',
        email : '',
        phone : '',
        provider : '',
        kakao : '',
        naver : '',
        google: '',

    }

    constructor(){
        // MobX 스토어를 자동으로 관찰 가능하게 설정
        makeAutoObservable(this)
    }

    // 메뉴 변경
    setSelectedMenu(menu){
        this.selectedMenu = menu
    }

    // 사이드바 열림 닫힘
    setSideBarOpen(){
        this.sideBarOpen = !this.sideBarOpen
    }

    // 인증 상태 변경
    setAuthenticated(authenticated){
        this.isAuthenticated = authenticated
    }

    // 1. 토큰 설정 후 인증 상태 설정
    setToken(token){
        this.token = token
        if (token) {
            localStorage.setItem('token', token)
            this.setAuthenticated(true)
        }else {
            localStorage.removeItem('token')
            this.setAuthenticated(false)
        }
    }
    
    // 2. 로컬 스토리지에서 토큰 가져오기
    loadToken(){
        const token = localStorage.getItem('token')
        this.setToken(token)
    }

    // 방명록 리스트
    setGuestBook(guestBook){
        this.guestBook = guestBook
    }

    // 관리자 리스트
    setAdminList(adminList){
        this.adminList = adminList
    }

    // 유저 정보
    setUserInfo(userInfo){
        this.userInfo = userInfo;
    }

}

// 스토어 인스턴스 생성
const menuStore = new MenuStore() 
export default menuStore