import { useMutation } from '@apollo/client'
import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import LoadingIndicator from '~/components/elements/LoadingIndicator'
import Input from '~/components/Input'
import { IUserInput, registerSchema } from '~/models/user'
import { REGISTER } from '~/mutations/auth'
import { notificationState, NOTIFICATION_TYPE } from '~/recoil/atoms/notificationState'

const RegisterForm = (): JSX.Element => {
  const setNotification = useSetRecoilState(notificationState)
  const [mutate, { data, loading, error }] = useMutation(REGISTER)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IUserInput>({
    mode: 'all',
    resolver: yupResolver(registerSchema),
  })

  useEffect(() => {
    if (error) {
      setNotification({
        isShow: true,
        autoClose: true,
        type: NOTIFICATION_TYPE.DANGEROUS,
        title: 'Cannot register your account!',
        message: 'There was an error while registering your account',
      })
    }
  }, [error, setNotification])

  useEffect(() => {
    if (data) {
      setNotification({
        isShow: true,
        autoClose: true,
        type: NOTIFICATION_TYPE.INFORMING,
        title: 'You account has been created! Logging you in...',
      })
      const data = getValues()
      signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/',
      })
    }
  }, [data, setNotification])

  const onSubmit = (data: IUserInput) => {
    //NOTE:  don't need to send confirmPassword to backend
    const account = { ...data } as Partial<IUserInput>
    delete account.confirmPassword
    mutate({
      variables: { input: account },
    })
  }

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Create free account</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            You can create your account in 2 minutes
          </p>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5">
                  <div className="grid grid-cols-2 space-x-4">
                    <div>
                      <label htmlFor="firstName" className="text-base font-medium text-gray-900">
                        {' '}
                        First name{' '}
                      </label>
                      <Input
                        type="text"
                        id="firstName"
                        placeholder="First name"
                        icon={
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
                        }
                        register={register('firstName')}
                        error={errors?.firstName}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-base font-medium text-gray-900">
                        {' '}
                        Last name{' '}
                      </label>
                      <Input
                        type="text"
                        id="lastName"
                        placeholder="Last name"
                        icon={
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
                        }
                        register={register('lastName')}
                        error={errors?.lastName}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-base font-medium text-gray-900">
                      {' '}
                      Last name{' '}
                    </label>
                    <Input
                      type="text"
                      id="fullName"
                      placeholder="Full name"
                      icon={
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
                      }
                      register={register('fullName')}
                      error={errors?.fullName}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                      {' '}
                      Email address{' '}
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter email to get started"
                      icon={
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
                      }
                      register={register('email')}
                      error={errors?.email}
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      icon={
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
                      }
                      register={register('password')}
                      error={errors?.password}
                    />
                  </div>

                  <div>
                    <label htmlFor="confirmPassword" className="text-base font-medium text-gray-900">
                      {' '}
                      Confirm password{' '}
                    </label>
                    <Input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      icon={
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
                      }
                      register={register('confirmPassword')}
                      error={errors?.confirmPassword}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className={`inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border ${
                        loading ? 'opacity-60' : 'opacity-100'
                      } border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700`}
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
                  {error &&
                    error?.graphQLErrors.map((error, index) => (
                      <p key={index} className="text-sm text-red-500">
                        {error.message}
                      </p>
                    ))}
                  <div className="text-center">
                    <p className="text-base text-gray-600">
                      Already have an account?{' '}
                      <Link
                        href="/login"
                        title=""
                        className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                      >
                        Login here
                      </Link>
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
