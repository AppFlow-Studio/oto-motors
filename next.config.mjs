/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure the brand logo ships inside the /api/build-deal serverless
  // function so it can be embedded (cid:) into transactional emails.
  outputFileTracingIncludes: {
    '/api/build-deal': ['./public/logo.png'],
  },
  // Preserve inbound links / SEO from the previous URL structure.
  async redirects() {
    return [
      { source: '/brands/:marque/:model', destination: '/:marque', permanent: true },
      { source: '/brands/:marque', destination: '/:marque', permanent: true },
      { source: '/lease/:slug', destination: '/leasing', permanent: true },
      { source: '/deliveries/:slug', destination: '/deliveries', permanent: true },
      { source: '/business-leasing', destination: '/build-your-deal', permanent: true },
      { source: '/out-of-state', destination: '/build-your-deal', permanent: true },
      { source: '/llc-titling', destination: '/build-your-deal', permanent: true },
      { source: '/vehicle-sourcing', destination: '/build-your-deal', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
