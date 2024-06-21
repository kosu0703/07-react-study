"use client"
import React from 'react';

const NaverLogin = () => {

  const handleLogin = () => {
    // 네이버 로그인 URL
    const clientId = 'YBlxtHy5leLiBnTL_u06';
    const redirectUri = 'http://localhost:8080/api/naverlogin'; 

    // 네이버 로그인 페이지로 리다이렉트
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&state=test&client_id=${clientId}&redirect_uri=${redirectUri}`;
  };

  return (
    <div>
      <button onClick={handleLogin}>네이버로 로그인</button>
    </div>
  );
};

export default NaverLogin;