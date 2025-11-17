import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from './LoginForm'

describe('LoginForm', () => {
  it('renders login form', () => {
    const mockOnLogin = vi.fn()
    render(<LoginForm onLogin={mockOnLogin} />)

    expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  it('shows validation errors for invalid email', async () => {
    const mockOnLogin = vi.fn()
    const user = userEvent.setup()
    render(<LoginForm onLogin={mockOnLogin} />)

    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const submitButton = screen.getByRole('button', { name: 'Login' })

    await user.type(emailInput, 'invalid-email')
    await user.type(passwordInput, 'Test1234!')
    await user.click(submitButton)

    expect(await screen.findByText(/invalid email format/i)).toBeInTheDocument()
    expect(mockOnLogin).not.toHaveBeenCalled()
  })

  it('shows validation errors for short password', async () => {
    const mockOnLogin = vi.fn()
    const user = userEvent.setup()
    render(<LoginForm onLogin={mockOnLogin} />)

    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const submitButton = screen.getByRole('button', { name: 'Login' })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'short')
    await user.click(submitButton)

    expect(
      await screen.findByText('Password must be at least 8 characters')
    ).toBeInTheDocument()
    expect(mockOnLogin).not.toHaveBeenCalled()
  })

  it('shows error for non-existent email', async () => {
    const mockOnLogin = vi.fn()
    const user = userEvent.setup()
    render(<LoginForm onLogin={mockOnLogin} />)

    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const submitButton = screen.getByRole('button', { name: 'Login' })

    await user.type(emailInput, 'notexist@example.com')
    await user.type(passwordInput, 'Password123!')
    await user.click(submitButton)

    expect(await screen.findByText('Email does not exist')).toBeInTheDocument()
    expect(mockOnLogin).not.toHaveBeenCalled()
  })

  it('shows error for incorrect password', async () => {
    const mockOnLogin = vi.fn()
    const user = userEvent.setup()
    render(<LoginForm onLogin={mockOnLogin} />)

    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const submitButton = screen.getByRole('button', { name: 'Login' })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'WrongPass123!')
    await user.click(submitButton)

    expect(await screen.findByText('Incorrect password')).toBeInTheDocument()
    expect(mockOnLogin).not.toHaveBeenCalled()
  })

  it('calls onLogin with correct credentials', async () => {
    const mockOnLogin = vi.fn()
    const user = userEvent.setup()
    render(<LoginForm onLogin={mockOnLogin} />)

    const emailInput = screen.getByLabelText('Email')
    const passwordInput = screen.getByLabelText('Password')
    const submitButton = screen.getByRole('button', { name: 'Login' })

    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'Test1234!')
    await user.click(submitButton)

    expect(mockOnLogin).toHaveBeenCalledWith('test@example.com')
  })
})
