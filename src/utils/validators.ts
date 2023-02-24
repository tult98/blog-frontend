const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/

export const isValidPassword = (password: string): boolean => {
  return PASSWORD_REGEX.test(password)
}

export const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email)
}