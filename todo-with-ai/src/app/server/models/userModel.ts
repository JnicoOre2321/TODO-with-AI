import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../config/db';
import type { UserInterface } from '../interfaces/userInteface';

const User = sequelize.define<Model<UserInterface>>('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: true,
    tableName: 'users'
});



export default User;