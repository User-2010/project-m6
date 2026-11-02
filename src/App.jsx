import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UsersPage from './pages/UsersPage'
import UsersDetailsPage from './pages/UsersDetailsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/user/:id" element={<UsersDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}