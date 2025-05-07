import bcrypt from 'bcrypt';
import userRepository from '../repositories/userRepository';

class UserService {
    async createUser(email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userRepository.createUser(email, hashedPassword);
        return user;
    }
}

export default new UserService();