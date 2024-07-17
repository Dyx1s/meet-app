import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import UserCard from './components/UserCard';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import MainPage from './pages/MainPage';
import userStore from './stores/UserStore';
import { observer } from 'mobx-react-lite';
import ProtectedRoute from './components/ProtectedRoute';


const App: React.FC = observer(() => {
  useEffect(() => {
    if (userStore.isAuthenticated) {
      userStore.fetchUsers();
    }
  }, [userStore.isAuthenticated]);
  return (
    <>
      <NavBar/>
      <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path='/' element={<ProtectedRoute/>}>
              <Route path='/' element={<MainPage />} />
          </Route>
          {/* <Route path='/' element={<MainPage />} /> */}
      </Routes>
    </>

  );
});

export default App;