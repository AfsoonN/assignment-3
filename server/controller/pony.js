let express = require('express');
let router = express.Router();
let mongoose = require('mongoose'); // npm i mongoose
// connect with pony model
let Pony = require('../models/ponys');
/* CRUD Operation*/

module.exports.displayPonyList = (req,res,next)=>{
    Pony.find((err, ponylist)=>{
        if(err)
        {
            return console.error(err); 
        }
        else
        {
            //console.log(ponylist);
           res.render('pony/list',{
                title:'ponys', 
                ponylist: ponylist
            }) 
        }
    });
}

module.exports.displayAddPage = (req,res,next)=> {
    res.render('pony/add',{title:'Add Pony'})
}

module.exports.processAddPage = (req,res,next)=> {
    let newPony = Pony ({
     "name":req.body.name,
     "colour":req.body.colour,
     "skill": req.body.skill,
     "age":req.body.age
    });
    Pony.create(newPony,(err,Pony) => {
     if(err)
     {
         console.log(err);
         res.end(err);
     }
     else
     {
         res.redirect('/pony-list');
     }
    })
 
 }

 module.exports.displayEditPage = (req,res,next)=> {
    let id = req.params.id;
    Pony.findById(id,(err,ponyToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('pony/edit',{title:'Edit Pony', pony:ponyToEdit});
        }
    });
}

 module.exports.processEditPage = (req,res,next)=> {
    let id=req.params.id;
    let updatePony = Pony({
        "_id":id,
        "name":req.body.name,
        "colour":req.body.colour,
        "skill": req.body.skill,
        "age":req.body.age
    });
    Pony.updateOne({_id:id},updatePony,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/pony-list');
        }
    });
}

module.exports.performDelete = (req,res,next)=> {
    let id =req.params.id;
    Pony.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/pony-list');
        }
    });
}
