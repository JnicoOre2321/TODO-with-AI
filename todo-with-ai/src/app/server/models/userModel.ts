import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/db';

const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false }
}, {
    timestamps: true,
    tableName: 'users'
});

export default User;