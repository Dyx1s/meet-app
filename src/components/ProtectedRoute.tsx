import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import userStore from '../stores/UserStore';

const ProtectedRoute: React.FC = observer(() => {
    if (!userStore.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
});

export default ProtectedRoute;
