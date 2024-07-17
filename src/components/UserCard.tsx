import React from 'react';
import { observer } from 'mobx-react-lite';
import userStore from '../stores/UserStore';

const UserCard: React.FC = observer(() => {
    if (!userStore.users.length) {
        return <div>Loading...</div>;
    }

    const user = userStore.users[0]; // Предполагаем, что отображаем первого пользователя

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={user.image} alt={user.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{user.name}</div>
                <p className="text-gray-700 text-base">{user.bio}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => userStore.likeUser()}>Like</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => userStore.dislikeUser()}>Dislike</button>
            </div>
        </div>
    );
});

export default UserCard;
