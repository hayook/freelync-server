const sequelize = require('../config/database'); 
const {DataTypes, Model} = require('sequelize'); 

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    }, 
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {sequelize}
); 

module.exports = User;