/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : true,
    swcMinify : true,
    async rewrites(){
        return [
            {
                //  소스에서 /makeup 으로 시작하면
                //  detination 에서 실제 주소의 정보를 가져올 수 있다.
                source : "/makeup/:path*",
                destination : "http://makeup-api.herokuapp.com/api/:path*"
            },
            {
                //  소스에서 /guestbook 으로 시작하면
                source : "/guestbook/:path*",
                destination : "http://localhost:8080/api/guestbook/:path*"
            },
            {
                //  소스에서 /members 으로 시작하면
                source : "/members/:path*",
                destination : "http://localhost:8080/api/members/:path*"
            }
        ];
    }
};

export default nextConfig;
