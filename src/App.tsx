import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import MainPage from './pages/MainPage';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </>

  );
};

export default App;