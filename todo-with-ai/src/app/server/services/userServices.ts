import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userRepository from '../repositories/userRepository';
import type { UserInterface } from '../interfaces/userInteface';

class UserService {
    async createUser(email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userRepository.createUser(email, hashedPassword);
        return user;
    }

    async login(email: string, password: string) {
        const user = await userRepository.getUserByEmail(email) as UserInterface | null;
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string);
        return { user, token };
    }


}

export default new UserService();