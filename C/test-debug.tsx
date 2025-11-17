import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from './src/components/LoginForm'

const test = async () => {
  const mockOnLogin = () => {}
  const user = userEvent.setup()
  const { container } = render(<LoginForm onLogin={mockOnLogin} />)

  const emailInput = screen.getByLabelText('Email')
  const passwordInput = screen.getByLabelText('Password')
  const submitButton = screen.getByRole('button', { name: 'Login' })

  await user.type(emailInput, 'invalid-email')
  await user.type(passwordInput, 'Test1234!')
  
  console.log('Before submit:', container.innerHTML.slice(0, 500))
  
  await user.click(submitButton)
  
  // Wait a bit
  await new Promise(r => setTimeout(r, 1000))
  
  console.log('After submit:', container.innerHTML.slice(0, 500))
  console.log('Errors:', screen.queryAllByRole('alert'))
}

test()
