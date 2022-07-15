const { Sequelize } = require('sequelize'); 
const { database, dbUsername, dbKey } = process.env;
const sequelize = new Sequelize(database, dbUsername, dbKey, {
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps: false,
    }
})

sequelize.authenticate().then(() => console.log('Success! MySQL Connected...')).catch(() => console.log('Error'));
module.exports = sequelize;

// dialectOptions: {
//     ssl: {
//         rejectUnauthorized: false,
//     },
// },
