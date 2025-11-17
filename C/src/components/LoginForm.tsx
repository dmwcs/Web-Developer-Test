import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { loginSchema, VALID_USERS } from '../data'
import type { LoginFormData } from '../data'

interface LoginFormProps {
  onLogin: (email: string) => void
}

function LoginForm({ onLogin }: LoginFormProps) {
  const [customError, setCustomError] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormData) => {
    setCustomError('')

    // Check if email exists
    const userExists = VALID_USERS.find((user) => user.email === data.email)
    if (!userExists) {
      setCustomError('Email does not exist')
      return
    }

    // Check if password matches
    if (userExists.password !== data.password) {
      setCustomError('Incorrect password')
      return
    }

    // Success - login
    onLogin(data.email)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Login
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register('password')}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Custom error */}
            {customError && (
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                <p className="text-sm font-medium text-red-800">{customError}</p>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              Login
            </button>

            {/* Forgot Password */}
            <div className="text-center pt-2">
              <a
                href="#"
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Forgot password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
