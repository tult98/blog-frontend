import { yupResolver } from '@hookform/resolvers/yup'
import { signIn, SignInResponse } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import LoadingIndicator from '~/components/elements/LoadingIndicator'
import Input from '~/components/Input'
import { IUserInput, loginSchema } from '~/models/user'
import { notificationState, NOTIFICATION_TYPE } from '~/recoil/atoms/notificationState'

const LoginForm = () => {
  const setNotification = useSetRecoilState(notificationState)
  const router = useRouter()
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [serverError, setServerError] = useState<string>()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<IUserInput, 'email' | 'password'>>({
    mode: 'all',
    resolver: yupResolver(loginSchema),
  })

  const onSubmit = async (data: Pick<IUserInput, 'email' | 'password'>) => {
    setSubmitting(true)
    const { error, ok, url } = (await signIn('credentials', {
      ...data,
      redirect: false,
      callbackUrl: '/',
    })) as SignInResponse

    if (ok) {
      setNotification({
        isShow: true,
        type: NOTIFICATION_TYPE.INFORMING,
        title: 'You have been logged in.',
        autoClose: true,
      })
      router.push(url as string)
    }
    if (error) {
      setNotification({
        isShow: true,
        type: NOTIFICATION_TYPE.DANGEROUS,
        title: 'Login failed',
        message: 'Cannot log in into your account.',
        autoClose: true,
      })
      setServerError('Email or password is incorrect.')
    }
    setSubmitting(false)
  }

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Welcome Back!</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Login to your account</p>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
          <div className="overflow-hidden bg-white rounded-md shadow-md">
            <div className="px-4 py-6 sm:px-8 sm:py-7">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                  <div className="flex items-center justify-between">
                    <label htmlFor="email" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>

                    <a
                      href="#"
                      title=""
                      className="text-sm font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 focus:text-orange-600 hover:underline"
                    >
                      {' '}
                      Forgot password?{' '}
                    </a>
                  </div>
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
                  <button
                    type="submit"
                    className={`inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 ${
                      submitting ? 'opacity-60' : ''
                    }`}
                  >
                    {submitting && (
                      <LoadingIndicator
                        positionStyle="mr-1"
                        options={{
                          width: '30',
                          height: '30',
                          color: '#E9F8F9',
                        }}
                      />
                    )}
                    Log in
                  </button>
                </div>
                {serverError && <p className="text-sm text-red-500">{serverError}</p>}
                <div className="text-center">
                  <p className="text-base text-gray-600">
                    Don’t have an account?{' '}
                    <Link
                      href="/register"
                      className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                    >
                      Create a free account
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm
