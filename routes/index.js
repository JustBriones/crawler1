var express = require('express');
var router = express.Router();

//importing file from index_controller
var indexController = require('../controllers/index_controller.js')

/* GET home page. */
//indexController.'something'. 'Something' is the KEY that is called, not function name
router.get('/jobs', indexController.index);

module.exports = router;
