import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Vite + React + Tailwind
        </h1>

        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Count is {count}
          </button>
        </div>

        <p className="text-gray-600 text-center text-sm">
          Click the button to increment the counter
        </p>
      </div>
    </div>
  )
}

export default App
