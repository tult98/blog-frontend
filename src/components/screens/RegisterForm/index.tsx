import { useMutation } from '@apollo/client'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import LoadingIndicator from '~/components/elements/LoadingIndicator'
import { REGISTER } from '~/mutations/auth'
import {
  notificationState,
  NOTIFICATION_TYPE,
} from '~/recoil/atoms/notificationState'
import { isValidEmail, isValidPassword } from '~/utils/validators'

const RegisterForm = (): JSX.Element => {
  const [account, setAccount] = useState<Record<string, string>>()
  const [errors, setErrors] = useState<Record<string, string>>({})
  const setNotification = useSetRecoilState(notificationState)
  const [mutate, { data, loading, error }] = useMutation(REGISTER, {
    variables: account,
  })

  useEffect(() => {
    setNotification({
      type: NOTIFICATION_TYPE.DANGEROUS,
      title: 'Cannot register your account!',
      message: 'There was an error while registering your account',
    })
  }, [error, setNotification])

  useEffect(() => {
    setNotification({
      type: NOTIFICATION_TYPE.INFORMING,
      title: 'You account has been created!',
      message: 'You can log in now.',
    })
  }, [data, setNotification])

  const validateRequiredText = (event: ChangeEvent<HTMLInputElement>) => {
    const newErrors = { ...errors }
    if (!event.target.value) {
      newErrors[event.target.name] = 'This field is required.'
    } else {
      delete newErrors[event.target.name]
    }
    setErrors(newErrors)
    return newErrors
  }

  const validateEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const newErrors = { ...errors }
    if (!isValidEmail(event.target.value)) {
      newErrors[event.target.name] = 'Email is invalid.'
    }
    setErrors(newErrors)
    return newErrors
  }

  const validatePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const newErrors = { ...errors }
    if (!isValidPassword(event.target.value)) {
      newErrors[event.target.name] = 'Password is too weak.'
    } else {
      delete newErrors.password
    }
    setErrors(newErrors)
    return newErrors
  }

  const validateConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const newErrors = { ...errors }
    if (event.target.value !== account?.password) {
      newErrors[event.target.name] =
        "Password and confirm password doesn't match"
    } else {
      delete newErrors.confirmPassword
    }
    setErrors(newErrors)
    return errors
  }

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    const newAccount = { ...account }
    newAccount[event.target.name] = event.target.value
    setAccount(newAccount)
  }

  const onSubmit = useCallback(() => {
    if (Object.keys(errors)?.length) {
      return
    }
    mutate()
  }, [errors, mutate])

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Create free account
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            You can create your account in 2 minutes
          </p>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <form>
                <div className="space-y-5">
                  <div className="grid grid-cols-2 space-x-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="text-base font-medium text-gray-900"
                      >
                        {' '}
                        First name{' '}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>

                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="First name"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          value={account?.firstName ?? ''}
                          onChange={onChangeText}
                          onBlur={validateRequiredText}
                        />
                      </div>
                      {errors?.firstName && (
                        <p className="mt-1 text-red-500">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="text-base font-medium text-gray-900"
                      >
                        {' '}
                        Last name{' '}
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>

                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Last name"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          value={account?.lastName}
                          onChange={onChangeText}
                          onBlur={validateRequiredText}
                        />
                      </div>
                      {errors?.lastName && (
                        <p className="mt-2 text-red-500">{errors?.lastName}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="fullName"
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Full name{' '}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>

                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder="Enter your full name"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        value={account?.fullName}
                        onChange={onChangeText}
                        onBlur={validateRequiredText}
                      />
                    </div>
                    {errors?.fullName && (
                      <p className="mt-2 text-red-500">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Email address{' '}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          />
                        </svg>
                      </div>

                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter email to get started"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        value={account?.email}
                        onChange={onChangeText}
                        onBlur={validateEmail}
                      />
                    </div>
                    {errors?.email && (
                      <p className="mt-2 text-red-500">{errors?.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Password{' '}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                          />
                        </svg>
                      </div>

                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        value={account?.password}
                        onChange={onChangeText}
                        onBlur={validatePassword}
                      />
                    </div>
                    {errors?.password && (
                      <p className="mt-2 text-red-500">{errors?.password}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Confirm password{' '}
                    </label>
                    <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                          />
                        </svg>
                      </div>

                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        value={account?.confirmPassword}
                        onChange={onChangeText}
                        onBlur={validateConfirmPassword}
                      />
                    </div>
                    {errors?.confirmPassword && (
                      <p className="mt-2 text-red-500">
                        {errors?.confirmPassword}
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      type="button"
                      className={`inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border ${
                        loading ? 'opacity-60' : 'opacity-100'
                      } border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700`}
                      onClick={onSubmit}
                    >
                      {loading && (
                        <LoadingIndicator
                          positionStyle="mr-1"
                          options={{
                            width: '30',
                            height: '30',
                            color: '#E9F8F9',
                          }}
                        />
                      )}
                      Create account
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="text-base text-gray-600">
                      Already have an account?{' '}
                      <a
                        href="#"
                        title=""
                        className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                      >
                        Login here
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterForm
