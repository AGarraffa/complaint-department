const router = require('express').Router();
const { User, Complaint, Reply } = require('../models');
const Department = require('../models/Department');
const withAuth = require('../utils/auth');


// getting the home page
router.get('/', async (req, res) => {

    try {

    } catch (err) {

        res.status(500).json(err);

    }
})