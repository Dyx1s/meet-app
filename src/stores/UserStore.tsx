import { makeAutoObservable } from 'mobx'
import UserService from '../services/UserService';

class UserStore {
    users = [];
    currentIndex = 0;
    isAuthenticated = false;

    constructor() {
        makeAutoObservable(this);
    }

    get currentUser() {
        return this.users[this.currentIndex];
    }

    async fetchUsers() {
        this.users = await UserService.getUsers();
    }

    likeUser() {
        this.currentIndex = (this.currentIndex + 1) % this.users.length;
    }

    dislikeUser() {
        this.currentIndex = (this.currentIndex + 1) % this.users.length;
    }


    async login(email: string, password: string) {
        const data = await UserService.login(email, password);
        if (data.success) {
            this.isAuthenticated = true;
        }
    }

    async register(username: string, email: string, password: string) {
        const data = await UserService.register(username, email, password);
        if (data.success) {
            this.isAuthenticated = true;
        }
    }

    logout() {
        this.isAuthenticated = false;
    }
}

const userStore = new UserStore();
export default userStore;