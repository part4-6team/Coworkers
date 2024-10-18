/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com', // 허용할 외부 도메인
        port: '', // 특정 포트를 허용하려면 설정
        pathname: '/**', // 모든 경로를 허용
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
