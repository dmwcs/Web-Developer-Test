import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Welcome from './Welcome'

describe('Welcome', () => {
  it('renders welcome message with user email', () => {
    const mockOnLogout = vi.fn()
    render(<Welcome userEmail="test@example.com" onLogout={mockOnLogout} />)

    expect(screen.getByText('Welcome!')).toBeInTheDocument()
    expect(screen.getByText('test@example.com')).toBeInTheDocument()
  })

  it('renders logout button', () => {
    const mockOnLogout = vi.fn()
    render(<Welcome userEmail="test@example.com" onLogout={mockOnLogout} />)

    expect(screen.getByRole('button', { name: 'Logout' })).toBeInTheDocument()
  })

  it('calls onLogout when logout button is clicked', async () => {
    const mockOnLogout = vi.fn()
    const user = userEvent.setup()
    render(<Welcome userEmail="test@example.com" onLogout={mockOnLogout} />)

    const logoutButton = screen.getByRole('button', { name: 'Logout' })
    await user.click(logoutButton)

    expect(mockOnLogout).toHaveBeenCalledTimes(1)
  })
})
