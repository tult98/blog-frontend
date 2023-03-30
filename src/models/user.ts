import * as yup from 'yup'
import { PASSWORD_REGEX, REQUIRED_ERROR_MESSAGE } from '~/utils/validators'

export interface IUser {
  id: string
  email: string
  firstName: string
  lastName: string
  fullName: string
  role: number
  createdAt: Date
  updatedAt: Date
}

export interface IUserInput extends Omit<IUser, 'role' | 'createdAt' | 'updatedAt'> {
  password: string
  confirmPassword: string
}

export const loginSchema = yup
  .object({
    email: yup.string().required(REQUIRED_ERROR_MESSAGE).email('Email is invalid.'),
    password: yup
      .string()
      .required(REQUIRED_ERROR_MESSAGE)
      .matches(
        PASSWORD_REGEX,
        'Password must contains at least 8 characters, one lower case, one upper case and one number.',
      ),
  })
  .required()

export const registerSchema = yup
  .object({
    firstName: yup.string().required(REQUIRED_ERROR_MESSAGE),
    lastName: yup.string().required(REQUIRED_ERROR_MESSAGE),
    fullName: yup.string().required(REQUIRED_ERROR_MESSAGE),
    email: yup.string().required(REQUIRED_ERROR_MESSAGE).email('Email is invalid'),
    password: yup
      .string()
      .required(REQUIRED_ERROR_MESSAGE)
      .matches(
        PASSWORD_REGEX,
        'Password must contains at least 8 characters, one lower case, one upper case and one number.',
      ),
    confirmPassword: yup
      .string()
      .required(REQUIRED_ERROR_MESSAGE)
      .oneOf([yup.ref('password')], "Confirm password doesn't match"),
  })
  .required()

export type CredentialFormData = yup.InferType<typeof loginSchema>
export type RegisterFormData = yup.InferType<typeof registerSchema>
