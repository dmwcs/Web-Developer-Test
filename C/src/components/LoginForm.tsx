interface LoginFormProps {
  onLogin: (email: string) => void
}

function LoginForm({ onLogin }: LoginFormProps) {
  return (
    <div>
      <h2>Login Form</h2>
      <p>Form fields will be added here</p>
    </div>
  )
}

export default LoginForm
