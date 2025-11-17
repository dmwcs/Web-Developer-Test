import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import Welcome from '../components/Welcome'

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  const handleLogin = (email: string) => {
    setCurrentUser(email)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setCurrentUser('')
    setIsLoggedIn(false)
  }

  return (
    <>
      {isLoggedIn ? (
        <Welcome userEmail={currentUser} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </>
  )
}

export default LoginPage
