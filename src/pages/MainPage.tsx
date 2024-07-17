import React, { useEffect } from 'react';
import UserCard from '../components/UserCard';
import userStore from '../stores/UserStore';
import { observer } from 'mobx-react-lite';

const MainPage: React.FC = observer(() => {
    useEffect(() => {
        userStore.fetchUsers();
    }, []);

    return (
        <div className="container mx-auto mt-4">
            <UserCard />
        </div>
    );
});

export default MainPage;
