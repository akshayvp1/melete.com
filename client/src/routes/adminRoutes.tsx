import React from 'react'
import AdminLogin from '../pages/adminLoginPage'
import { Routes,Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
function adminRoutes() {
  return (
    <Routes>
    <Route path="/admin/signin" element={<LoginPage />} />
    <Route path='/signin' element={<AdminLogin/>} />
    </Routes>
  )
}

export default adminRoutes