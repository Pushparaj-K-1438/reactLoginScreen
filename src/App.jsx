import LoginPage from './pages/Login'
import SignupPage from './pages/SignUp'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<LoginPage/>} />
              <Route path="/signup" element={<SignupPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
