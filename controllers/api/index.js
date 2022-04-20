const router = require('express').Router();
const userRoutes = require('./user-routes');
const complaintRoutes = require('./complaint-routes');
const departmentRoutes = require('./department-routes');
const replyRoutes = require('./reply-routes');

router.use('/users', userRoutes);
router.use('complaints', complaintRoutes);
router.use('/replies', replyRoutes);
router.use('departments', departmentRoutes);

module.exports = router;