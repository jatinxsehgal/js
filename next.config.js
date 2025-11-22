module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
    async redirects() {
    return [
      {
        source: 'https://sehgal.netlify.app/',   // old URL
        destination: 'https://sehgal.vercel.app/', // new URL
        permanent: true,       // true = 308 redirect (SEO friendly)
      },
    ];
  },
  },
}