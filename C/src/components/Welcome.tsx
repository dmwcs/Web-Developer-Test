interface WelcomeProps {
  userEmail: string
  onLogout: () => void
}

function Welcome({ userEmail, onLogout }: WelcomeProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Welcome Message */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome!
            </h1>
            <p className="text-lg text-gray-600">
              {userEmail}
            </p>
          </div>

          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="w-full bg-gray-600 text-white py-3 px-4 rounded-lg hover:bg-gray-700 active:bg-gray-800 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Welcome
