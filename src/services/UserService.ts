import axios from 'axios';

export interface User {
    name: string;
    bio: string;
    image: string;
}

class UserService {
    async getUsers(count: number = 10): Promise<User[]> {
        const response = await axios.get(`https://randomuser.me/api/?results=${count}`)
        return response.data.results.map((user: any) => ({
            name: `${user.name.first} ${user.name.last}`,
            bio: user.email,
            image: user.picture.medium
        }));
    }

    

    async login(email: string, password: string) {
        // Симуляция логина
        return { success: true, user: { email } };
    }

    async register(username: string, email: string, password: string) {
        // Симуляция регистрации
        return { success: true, user: { username, email } };
    }

    async getUserProfile() {
        // Симуляция получения профиля пользователя
        return {
            name: 'Demo name',
            bio: 'Demo bio',
            image: 'https://via.placeholder.com/150'
        };
    }
}

export default new UserService();
