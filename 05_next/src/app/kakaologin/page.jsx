"use client"
import React from 'react';

const KakaoLogin = () => {

  const handleLogin = () => {
    // 카카오 로그인 URL
    const clientId = '84f22c8078987862ac7f5051394c4959';
    const redirectUri = 'http://localhost:8080/api/kakaologin'; 

    // 카카오 로그인 페이지로 리다이렉트
    window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`;
  };

  return (
    <div>
      <button onClick={handleLogin}>카카오로 로그인</button>
    </div>
  );
};

export default KakaoLogin;