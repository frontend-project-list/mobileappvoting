const db = require('../models');

const {positions,candidates,students} = db;

module.exports={

    getAllPositions: async (req,res)=>{
        try{
            const allPositions = await positions.findAll({
                include:[{
                    model:candidates,
                    include:[{
                        model:students
                    }]

                }]
            });


            return res.status(200).json({message:'All positions',data:allPositions});
        }catch(err){
            return res.status(500).json(err);
        }
    },

    allPositions :async (req,res)=>{
        try{
            const Positions = await positions.findAll({});
            return res.status(200).json({message:'All positions',data:Positions});

        }catch(err){
            return res.status(500).json(err);
        }
    },

    addPosition : async (req,res)=>{
        try{
            position_name = req.body.name
            if (!position_name) {
                return res.status(401).json({message:'name missing',data:[]});
            }
            const Position = await positions.create({ name : position_name });
            return res.status(200).json({message:'position added succesfully',data:Position});

        }catch(err){
            return res.status(500).json(err);
        }
    }
}