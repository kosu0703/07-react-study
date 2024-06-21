import ReactPlayer from "react-player";
import KakaoLogin from "./kakaologin/page";
import NaverLogin from "./naverlogin/page";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <KakaoLogin/>
        <NaverLogin/>
      </body>
    </html>
  );
}
