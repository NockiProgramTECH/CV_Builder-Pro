import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Builder from '@/pages/Builder';
import AuthPage from '@/pages/AuthPage';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import ForgotPasswordPage from '@/pages/ForgotPasswordPage';
import UpdatePasswordPage from '@/pages/UpdatePasswordPage';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/update-password" element={<UpdatePasswordPage />} />
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <Builder />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
}

export default App;