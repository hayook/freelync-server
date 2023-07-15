const { Sequelize } = require('sequelize');

const { database, dbUsername, dbKey } = process.env;

const sequelize = new Sequelize(database, dbUsername, dbKey, {
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps: false,
    }
})

sequelize.authenticate().then(() => console.log('Success! MySQL Connected...')).catch(err => console.log('Error connecting to the database' + err));
module.exports = sequelize;

// dialectOptions: {
//     ssl: {
//         rejectUnauthorized: false,
//     },
// },
