import React from 'react';
import { Link } from 'react-router-dom';
import userStore from '../stores/UserStore';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-gray-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-bold text-xl">Тиндер на минималках</Link>
                <div>
                    {userStore.isAuthenticated ? (
                        <button onClick={() => userStore.logout()} className="bg-red-500 text-white py-2 px-4 rounded">
                            Выйти
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="bg-black-500 text-white py-2 px-4 rounded mr-2">Войти</Link>
                            <Link to="/register" className="bg-black-700 text-white py-2 px-4 rounded">Регистрация</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
