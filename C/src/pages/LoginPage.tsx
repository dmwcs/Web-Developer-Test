import { useState } from 'react'

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
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {currentUser}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <p>Login form component will go here</p>
        </div>
      )}
    </div>
  )
}

export default LoginPage
