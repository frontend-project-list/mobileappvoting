const db = require('../models');
const jwt = require("jsonwebtoken");

const {students} = db;

module.exports = {
    checkInputs : function async(req,res,next){
        try{
            const biography = req.body.biography;
            const positionId = req.body.positionId

            if(!biography || !positionId){
                return res.status(400).json({message : `missing input `, data :[]});
            }else{
                next()
            }
        }catch(err){
            return res.status(400).json({message:'an error occured',data:[err]});
        }
    },


    authenticate : function async(req,res,next){
        try{
            const header = req.headers['authorization'];
            const token = header && header.split(' ')[1];
            console.log(token)

            jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
                if (err) {
                    res.status(403).json({message :"authentication error", data :[]})
                } else {
                    req.user = user;
                    next();
                }
            });
        }catch(err){
            res.status(500).json({message :"an error occured", data :[]})
        }
    }
}

    