let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect with book model

let book = require('../models/book');
let bookController = require('../controller/book');
/*crud operation*/

//read operation
//get rout for book list

router.get('/', bookController.displayBookList);

/*add operation*/
/*get route to display add page -- create operation*/
router.post('/add', bookController.processAddPage);
    
/*edit operation*/
/*get route for displaying edit operation -- update operation*/
router.get('/edit/:id', bookController.displayEditPage);
/* post route for displaying edit operation -- update operation*/
    router.post('/edit/:id', bookController.processEditPage);
/*delete operation*/
/*get to perform delete operation -- deletion*/
router.get('/delete/:id', bookController.performDelete);

module.exports = router;

