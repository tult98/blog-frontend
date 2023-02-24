export const getAccessToken = () => {
  return sessionStorage.getItem('accessToken')
}

export const setAccessToken = (token: string) => {
  sessionStorage.setItem('accessToken', token)
}

export const getRefreshToken = () => {
  return sessionStorage.getItem('refreshToken')
}

export const setRefreshToken = (token: string) => {
  sessionStorage.setItem('refreshToken', token)
}
