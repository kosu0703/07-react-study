/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : true ,
    swcMinify : true ,
    async rewrites(){
        return[
            {
                source : "/makeup/:path*" ,
                destination : "https://makeup-api.herokuapp.com/api/:path*"
            },
            {
                source : "/members/:path*" ,
                destination : "http://localhost:8080/api/members/:path*"
            }
        ]
    }
};

export default nextConfig;
