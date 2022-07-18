const Gig = require('../models/Gig');
const User = require('../models/User')
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');



// Create 
const addGig = async (req, res) => {
    let { body, token } = req;
    try {
        var isAuthorized = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    } catch (error) {
        console.log('Error ' + error); 
    }
    if (isAuthorized) {
        const gig = { ...body, userId: isAuthorized.userId }
        try {
            await Gig.create(gig);
            res.sendStatus(200);
        } catch (error) {
            console.log(`Can't POST Gig ` + error);
            res.sendStatus(500);
        }
        return; 
    }
    res.status(403).json({message: 'You dont have the right to add a gig'});
}

// Read
const getAllGigs = async (req, res) => {
    try {
        const allGigs = await Gig.findAll({ include: User, raw: true });
        res.status(200).json(allGigs);
    } catch (error) {
        console.log(`Can't GET Gigs` + error);
        res.sendStatus(500);
    }
};
const getGigByPk = async (req, res) => {
    const { id } = req.params;
    const gig = await Gig.findByPk(id);
    res.status(200).json(gig);
}

// Search 
const searchGigs = async (req, res) => {
    const { q } = req.query;
    let gigs = [];
    try {
        if (q) {
            gigs = await Gig.findAll({
                where: {
                    [Op.or]: {
                        title: { [Op.like]: `%${q}%` },
                        description: { [Op.like]: `%${q}%` },
                        technologies: { [Op.like]: `%${q}%` },
                    }
                }
            });
        }
        res.status(200).json(gigs)
    } catch (error) {
        console.log(`Can't Search Gig ` + error);
        res.sendStatus(500);
    }
}

// Update 
const updateGig = async (req, res) => {
    const {body, token} = req; 
    try {
        var isAuthorized = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); 
    } catch (error) {
        console.log('Error ' + error); 
    }
    if (isAuthorized) {
        const gig = await Gig.findByPk(body.id);
        console.log(gig.userId); 
        console.log(isAuthorized.userId);
        if (gig.userId === isAuthorized.userId) {
            try {
                await Gig.upsert(body) // <=> await Gig.update({where: {id: gig.id}});
                res.status(200).json(body);
            } catch (error) {
                console.log(`Can't UPDATE Gig ` + error);
                res.sendStatus(500);
            }
            return;
        }
    }
    res.status(403).json({message: 'You Dont have the access to edit this gig'})
}

// Delete 
const deleteGig = async (req, res) => {
    try {
        var isAuthorized = jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET);
    } catch (error) {
        console.log('Error ' + error)
    }
    if (isAuthorized) {
        const { id } = req.params;
        const gig = await Gig.findByPk(id)
        if (isAuthorized.userId === gig.userId) {
            try {
                await Gig.destroy({ where: { id } });
                res.sendStatus(200);
            } catch (error) {
                res.sendStatus(500);
            }
            return;
        }
    }
    res.status(403).json({ message: 'You dont have acccess to delete the gig' })
}

module.exports = { getAllGigs, searchGigs, addGig, deleteGig, updateGig, getGigByPk }; 