const router = require('express').Router();
const { User, Complaint, Reply } = require('../../models');

// /comnplaints end path

router.get('/', async (req, res) => {

    try {

        const complaintData = await Complaint.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ]
        })

    } catch (err) {
        res.status(500).json(err);
    }
})