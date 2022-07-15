const express = require('express');
const { Op } = require('sequelize');
const Gig = require('../models/Gig');
const User = require('../models/User');
const apiRouter = express.Router();
const { getAllGigs, searchGigs, addGig, deleteGig, updateGig, getGigByPk } = require('../controllers/api');


apiRouter.post('/', addGig)
apiRouter.get('/', getAllGigs);
apiRouter.put('/', updateGig);

apiRouter.delete('/gig-:id', deleteGig)
apiRouter.get('/gig-:id', getGigByPk);

apiRouter.get('/search', searchGigs);;

module.exports = apiRouter; 