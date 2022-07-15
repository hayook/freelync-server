const sequelize = require('../config/database'); 
const {DataTypes, Model} = require('sequelize'); 

class Gig extends Model {}

Gig.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    }, 
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    budget: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    description: DataTypes.TEXT,
    technologies: DataTypes.STRING,
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'UserId',
    }
    }, {sequelize}
);

module.exports = Gig; 