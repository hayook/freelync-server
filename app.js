const express = require('express');
const app = express();
require('dotenv').config();
const bcrypt = require('bcryptjs');
const cors = require('cors');  

// Database
const sequelize = require('./config/database');
const User = require('./models/User');
const Gig = require('./models/Gig');
const { build } = require('./models/User');
// Relationships
User.hasMany(Gig);
Gig.belongsTo(User);

// Gig.sync({force: true}).then(() => console.log('Success! Model Synced')); 

app.use(cors());
app.use(express.json());
app.use('/api/gigs', require('./routes/api-router'));

app.get('/', (req, res) => res.status(200).end('Home')); 
app.get('*', (req, res) => res.sendStatus(404));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started On http://localhost:${PORT}`));   