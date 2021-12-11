const db = require('../models');
const jwt = require('jsonwebtoken')
const {arbitration,candidates} = db;

module.exports = {
    login: async (req,res)=>{
        const {email} = req.body
        const {password} = req.body

        if(!email || !password){
            return res.status(500).json({message : "missing required fields", data : []});
        }
        try{
            const user = await arbitration.findOne({
                where:{email : email, password : password}
            });
            if(user){
                const data = {
                    id : user.id,
                    regID : user.regID,
                    f_name : user.f_name,
                    l_name : user.l_name,
                    email : user.email
                };
                const token = jwt.sign({data}, process.env.JWT_SECRET, {expiresIn :"900h"});
                
                return res.status(200).json({message:'logged in successfully',data:{...data,token}});
            }else{
                return res.status(400).json({message:'email and password mismatch',data:[]});
            }
            
        }catch(err){
            return res.status(500).json({message : "en error occured", data : err});
        }
    },

    approve : async (req,res)=>{
        
        // try{
            const candidate_id = req.params.id
            const candidate = candidates.update({status : "APPROVED"}, {where : {id : candidate_id}})
            return res.status(200).json({message:'candidate approved succesfully',data:[candidate]});
            
        // }catch(err){
        //     return res.status(500).json({message : "en error occured", data : err});
        // }
    }
}