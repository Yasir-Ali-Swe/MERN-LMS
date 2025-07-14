import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {  Login, Register, Dashboard , MyProfile, AddInstructor, ManageUsers, ManageCourses, ManagePost } from './pages'
import Layout from './components/Layout.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="add-instructor" element={<AddInstructor />} />
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-courses" element={<ManageCourses />} />
          <Route path="manage-post" element={<ManagePost />} />
        </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;