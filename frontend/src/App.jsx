import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, Register, Dashboard, MyProfile, AddInstructor, ManageUsers, ManageCourses, ManagePost } from './pages'
import Layout from './components/Layout.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import PublicRoute from './components/PublicRoute.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="add-instructor" element={<AddInstructor />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-courses" element={<ManageCourses />} />
          <Route path="manage-post" element={<ManagePost />} />
        </Route>
        <Route path="login" element={<PublicRoute> <Login /></PublicRoute>} />
        <Route path="register" element={<PublicRoute> <Register /></PublicRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;