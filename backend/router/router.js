const express=require('express')
const router=express.Router();

const {getAllFromAPI} = require('../controller/maincontroller')
router.route('/api').get(getAllFromAPI)

module.exports = router;