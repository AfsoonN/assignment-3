let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with pony model

let pony = require('../models/ponys');
let ponyController = require('../controller/pony');
/*crud operation*/

//read operation
//get rout for pony list

router.get('/', ponyController.displayPonyList);

/*add operation*/
/*get route to display add page -- create operation*/
router.post('/add', ponyController.processAddPage);
    
/*edit operation*/
/*get route for displaying edit operation -- update operation*/
router.get('/edit/:id', ponyController.displayEditPage);
/* post route for displaying edit operation -- update operation*/
    router.post('/edit/:id', ponyController.processEditPage);
/*delete operation*/
/*get to perform delete operation -- deletion*/
router.get('/delete/:id', ponyController.performDelete);

module.exports = router;

