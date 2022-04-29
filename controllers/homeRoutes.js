const router = require('express').Router();
const { User, Complaint, Reply, Department } = require('../models');

const withAuth = require('../utils/auth');


// getting the home page
router.get('/', async (req, res) => {

    try {

        // const userData = await User.findAll({})
        // include replies and users
        const complaintData = await Complaint.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
                {
                    model: Reply,
                    attributes: ['reply']
                }
            ]
        });
        // const replyData = await Reply.findAll({});

        const complaints = complaintData.map((complaint) => complaint.get({ plain: true }));

        // renders the handlebars homepage
        res.render('homepage', {
            complaints, 
            logged_in: req.session.logged_in
        });


    } catch (err) {

        res.status(500).json(err);

    }
});