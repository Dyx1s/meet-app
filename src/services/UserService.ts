import axios from "axios";

class UserService {
    async getUsers(count: number = 10) {
        const response = await axios.get(`https://randomuser.me/api/?results=${count}`)
        return response.data.results.map((user: any) => ({
            name: `${user.name.first} ${user.name.last}`,
            bio: user.email,
            image: user.picture.large
        }));
    }

    async login(email: string, password: string) {
        /* ща придумаем */
        return { success: true };
    }

    async register(username: string, email: string, password: string) {
        /* ща придумаем */
        return { success: true };
    }

    async getUserProfile() {
        /* ща придумаем */
        return {
            name: 'Demo name',
            bio: 'Demo bio',
            image: 'https://via.placeholder.com/150'
        }
    }
}

export default new UserService()