import React from 'react';
import { Link } from 'react-router-dom';
import userStore from '../stores/UserStore';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-bold text-xl">Тиндер на минималках</Link>
                <div>
                    {userStore.isAuthenticated ? (
                        <button onClick={() => userStore.logout()} className="bg-red-500 text-white py-2 px-4 rounded">
                            Logout
                        </button>
                    ) : (
                        <>
                            <Link to="/login" className="bg-green-500 text-white py-2 px-4 rounded mr-2">Log in</Link>
                            <Link to="/register" className="bg-blue-700 text-white py-2 px-4 rounded">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
