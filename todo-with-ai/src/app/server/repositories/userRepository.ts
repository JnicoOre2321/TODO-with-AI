import User from '../models/userModel'

class UserRepository {
    async createUser(email: string, password: string) {
        return await User.create({ email, password });
    }
}

export default new UserRepository();