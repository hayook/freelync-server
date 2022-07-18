const express = require('express');
const { Op } = require('sequelize');
const Gig = require('../models/Gig');
const User = require('../models/User');
const apiRouter = express.Router();
const { getAllGigs, searchGigs, addGig, deleteGig, updateGig, getGigByPk } = require('../controllers/api');
const { authToken } = require('../midlewares/auth');


apiRouter.get('/', getAllGigs);
apiRouter.post('/', authToken, addGig)
apiRouter.put('/', authToken, updateGig);

apiRouter.delete('/gig-:id', authToken, deleteGig)
apiRouter.get('/gig-:id', getGigByPk);

apiRouter.get('/search', searchGigs);

module.exports = apiRouter; 