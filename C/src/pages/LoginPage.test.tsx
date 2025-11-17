import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginPage from './LoginPage'

describe('LoginPage Integration', () => {
  it('shows login form initially', () => {
    render(<LoginPage />)
    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  it('shows welcome page after successful login', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)

    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const submitButton = screen.getByRole('button', { name: 'Login' })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'Test1234!')
    await user.click(submitButton)

    expect(await screen.findByText('Welcome!')).toBeInTheDocument()
    expect(screen.getByText('test@example.com')).toBeInTheDocument()
  })

  it('returns to login form after logout', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)

    // Login
    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const submitButton = screen.getByRole('button', { name: 'Login' })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'Test1234!')
    await user.click(submitButton)

    // Wait for welcome page
    expect(await screen.findByText('Welcome!')).toBeInTheDocument()

    // Logout
    const logoutButton = screen.getByRole('button', { name: 'Logout' })
    await user.click(logoutButton)

    // Should show login form again
    expect(
      await screen.findByRole('heading', { name: 'Login' })
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })
})
