import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Builder from '@/pages/Builder';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Builder />} />
    </Routes>
  );
}

export default App;