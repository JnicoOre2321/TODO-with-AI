import User from '../models/userModel'

class UserRepository {
    async createUser(email: string, password: string) {
        return await User.create({ email, password });
    }

    async getPassword(email: string) {
        const user = await User.findOne({ where: { email } });
        return user?.get('password');
    }

    async getUserByEmail(email: string) {
        const user = await User.findOne({ where: { email } });  
        return user;
    }
}

export default new UserRepository();