module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'https://sheltered-inlet-63215.herokuapp.com/api/:slug*',
      },
    ]
  },
}
