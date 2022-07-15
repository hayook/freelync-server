const Gig = require('../models/Gig');
const { Op } = require('sequelize');



// Create 
const addGig = async (req, res) => {
    const gig = req.body;
    try {
        await Gig.create(gig);
        res.sendStatus(201);
    } catch (error) {
        console.log(`Can't POST Gig ` + error);
        res.sendStatus(500);
    }
}

// Read
const getAllGigs = async (req, res) => {
    try {
        const allGigs = await Gig.findAll();
        res.status(200).json(allGigs);
    } catch (error) {
        console.log(`Can't GET Gigs`);
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
    const gig = req.body;
    try {
        await Gig.upsert(gig) // <=> await Gig.update({where: {id: gig.id}});
        res.status(200).json(gig); 
    } catch (error) {
        console.log(`Can't UPDATE Gig ` + error); 
        res.sendStatus(500);  
    }
}

// Delete 
const deleteGig = async (req, res) => {
    const { id } = req.params;
    try {
        await Gig.destroy({ where: { id } });
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
}

module.exports = { getAllGigs, searchGigs, addGig, deleteGig, updateGig, getGigByPk }; 