interface WelcomeProps {
  userEmail: string
  onLogout: () => void
}

function Welcome({ userEmail, onLogout }: WelcomeProps) {
  return (
    <div>
      <h1>Welcome, {userEmail}!</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default Welcome
