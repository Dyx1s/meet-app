import {makeAutoObservable} from 'mobx'

class UserStore {
    users = [
        { id: 1, name: 'User 1', bio: 'Bio 1', image: 'https://via.placeholder.com/400' },
        { id: 2, name: 'User 2', bio: 'Bio 2', image: 'https://via.placeholder.com/400' },
    ];
    currentIndex = 0;

    constructor() {
        makeAutoObservable(this);
    }

    get currentUser() {
        return this.users[this.currentIndex];
    }

    likeUser() {
        this.currentIndex = (this.currentIndex + 1) % this.users.length;
    }

    dislikeUser() {
        this.currentIndex = (this.currentIndex + 1) % this.users.length;
    }
}

const userStore = new UserStore();
export default userStore;