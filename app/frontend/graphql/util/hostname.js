export function getHostname() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://api.stronglemmas.com'
  } else {
    return 'http://api.localhost:3000'
  }
}
