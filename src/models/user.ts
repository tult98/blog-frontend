import * as yup from 'yup'
import { PASSWORD_REGEX } from '~/utils/validators'

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

export const loginSchema = yup.object({
  email: yup.string().required('Email is required.').email('Email is invalid.'),
  password: yup
    .string()
    .required('Password is required.')
    .matches(
      PASSWORD_REGEX,
      'Password must contains at least 8 characters, one lower case, one upper case and one number.',
    ),
})

export const registerSchema = yup.object({
  firstName: yup.string().required('First name is required.'),
  lastName: yup.string().required('Last name is required.'),
  fullName: yup.string().required('Full name is required.'),
  email: yup.string().required('Email is required.').email('Email is invalid'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      PASSWORD_REGEX,
      'Password must contains at least 8 characters, one lower case, one upper case and one number.',
    ),
  confirmPassword: yup.string().oneOf([yup.ref('password')], "Confirm password doesn't match"),
})
