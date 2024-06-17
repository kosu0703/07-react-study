/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : true,
    swcMinify : true,
    async rewrites(){
        return [
            {
                //  /api/login 으로 시작되는 모든 요청 
                //  SpringBoot 의 /api/login 으로 리 라이트 됩니다.
                source : '/api/login',
                destination : 'http://localhost:8080/api/login'
            },
            {
                source : '/api/logout',
                destination : 'http://localhost:8080/api/logout'
            },
            {
                source : '/api/guestbook',
                destination : 'http://localhost:8080/api/guestbook'
            },
            {
                source : '/api/adminlist',
                destination : 'http://localhost:8080/api/adminlist'
            }
        ];
    }
};

export default nextConfig;
