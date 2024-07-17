import { makeAutoObservable } from 'mobx';
import userService, { User } from '../services/UserService';

class UserStore {
    isAuthenticated = false;
    currentUser: any = null;
    users: User[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    async login(email: string, password: string) {
        const response = await userService.login(email, password);
        if (response.success) {
            this.currentUser = response.user;
            this.isAuthenticated = true;
        }
    }

    async register(username: string, email: string, password: string) {
        const response = await userService.register(username, email, password);
        if (response.success) {
            this.currentUser = response.user;
            this.isAuthenticated = true;
        }
    }

    async fetchUsers(count: number = 10) {
        const users = await userService.getUsers(count);
        this.users = users;
    }

    async getUserProfile() {
        const profile = await userService.getUserProfile();
        this.currentUser = profile;
    }

    logout() {
        this.isAuthenticated = false;
        this.currentUser = null;
    }

    likeUser() {
        // Логика лайка пользователя
    }

    dislikeUser() {
        // Логика дизлайка пользователя
    }
}

const userStore = new UserStore();
export default userStore;
