import React from 'react';
import Homee from './components/home/Home';
import Form from './components/for/Form';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/form" element={<Form />} />
        <Route path="/home" element={<Homee />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;