const db = require('../models');
const jwt = require('jsonwebtoken')
const parser = new (require('simple-excel-to-json').XlsParser)();
const mailEvent = require("../helpers/events");
const bcrypt = require("bcrypt");

const {students,votes,positions,candidates} = db;

module.exports={

    login: async (req,res)=>{
        const {email} = req.body
        const {password} = req.body

        if(!email || !password){
            return res.status(500).json({message : "missing required fields", data : []});
        }
        try{
            const user = await students.findOne({
                where:{email : email, password : password}
            });
            if(user){
                const data = {
                    id : user.id,
                    regNumber : user.regNumber,
                    f_name : user.f_name,
                    l_name : user.l_name,
                    email : user.email
                };
                const token = jwt.sign({data}, process.env.JWT_SECRET, {expiresIn :"900h"});
                
                return res.status(200).json({message:'succcesfully logged in',data:{...data,token}});
            }else{
                return res.status(400).json({message:'email and password mismatch',data:[]});
            }
            
        }catch(err){
            return res.status(500).json({message : "en error occured", data : err});
        }
    },

    importStudents: async (req,res)=>{
        try {
            const file = req.file.path
            const doc = parser.parseXls2Json(file);
            const fileIsValid = doc[0][0];
            if(!fileIsValid?.regNumber){
                console.log(fileIsValid);
               return res.status(400).json({message: "You upload bad file", data : []});
            }
            const imports = await doc[0].map(student => {
              return {
                ...student,
                password : `Sec${Math.floor(Math.random() * 10000)}Pwd`
                }
            });
        
            //adding users in thee database
            const data = await students.bulkCreate(imports);
            mailEvent.emit('sendEmail',imports);
        
            //send response
            res.status(200).json({message: "students were added in the database", data : []});
          }catch (err) {
            res.status(500).send({message: "an error ocurred", data : [err]});
          }
    },

    VotedPositions : async(req,res) =>{
        try{
            const user = req.user.data ;
            
            const sql = `SELECT positions.id, positions.name FROM votes JOIN candidates ON candidateId = candidates.id JOIN students ON voterId = students.id JOIN positions ON candidates.positionId = positions.id WHERE students.id = ${user.id}`
            let data = await db.sequelize.query(sql, { type: db.sequelize.QueryTypes.SELECT });

            res.status(200).json({message: "voted positions", data : [data] });
        }catch (err) {
            res.status(500).send({message: "an error ocurred", data : [err]});
          }
        
    },
    getAllStudents: async (req,res)=>{
        try{
            const data = await students.findAll();
            return res.status(200).json({message: "all students", data });
        }catch (err) {
           return  res.status(500).send({message: "an error ocurred", data :err});
          }
    }

    // getStudentById: async (req,res)=>{
    //     try{
    //         const {id} = req.params;
    //         const data = await students.findOne({
    //             where:{id}
    //         });
    //         res.status(200).json({message: "student", data : [data] });
    //     }catch (err) {
    //         res.status(500).send({message: "an error ocurred", data : [err]});
    //       }
    // },

    // getStudentByRegNumber: async (req,res)=>{
    //     try{
    //         const {regNumber} = req.params;
    //         const data = await students.findOne({
    //             where:{regNumber}
    //         });
    //         res.status(200).json({message: "student", data : [data] });
    //     }catch (err) {
    //         res.status(500).send({message: "an error ocurred", data : [err]});
    //       }
    // }
}