const db = require('../models');

const {candidates,votes,positions,students} = db;

module.exports={

    register: async (req,res)=>{
        try{
            const user = req.user.data ;
            const candidateExists = await candidates.findOne({where :{studentId :user.id }});
            if(candidateExists){
                return res.status(400).json({message : "already registerd as a candidate", data : []});
            }else{
               const candidate = await candidates.create({
                    studentId:user.id,
                    biography:req.body.biography,
                    positionId:req.body.positionId,
                    status : "NOT APPROVED",
                    photo : req.file.filename
                })
                return res.status(200).json({message : "registerd as a candidate succesfully", data : [candidate]});
            }
        }catch(err){
            return res.status(500).json({message : "an error occured", data : [err]});
        }
    },

    vote :async (req,res)=> {
        try{
            console.log(req.params);
            const user = req.user.data ;
            const hasVoted = await votes.findOne({where :{voterId :user.id,positionId:req.params.positionId}});
            if(hasVoted){
                return res.status(400).json({message : "already voted for this position", data : []});
            }
            const candidateId = req.params.candid;
            const vote = await votes.create({
                voterId : user.id,
                candidateId : candidateId,
                positionId : req.params.positionId
            })
            if(vote){
                let prevVote = await candidates.findOne({where : {id : candidateId}})
                prevVote = prevVote.dataValues.votes
                candidates.update({votes : prevVote+1},{where :{ id : candidateId}})
            }
            return res.status(200).json({message : "voted succesfully", data : [vote]});
        }catch(err){
            console.log(err)
            return res.status(500).json({message : "an error occured", data : [err]});
        }
    },

    allCandidates : async (req,res)=> {
        try{
            const data = await candidates.findAll({
                include:[{
                    model:positions
                },{
                    model:students
                }]
            });
            return res.status(200).json({message : "all candidates", data : [data]});
        }catch(err){
            return res.status(500).json({message : "an error occured", data : [err]});
        }
    },

    results : async (req,res)=>{
        try{
            const context = await positions.findAll({
                include:[{
                    model:candidates,
                    include:[{
                        model:students
                    }]
                }],
                order: [
                    [{ model: candidates}, 'votes', 'DESC']
                  ],
            });
            return res.status(200).json({message:'candidates voting results',data:context});
        }catch(err){
            return res.status(500).json(err);
        }
    },

    report : async (req,res)=>{
        try{
            const context = await votes.findAll({
                include:[{
                    attributes : ['id','regNumber','f_name','l_name','className'],
                    model:students,
                },{
                    attributes : ['id','name'],
                    model: positions,
                }]
            });
            return res.status(200).json({message:'candidates voting report',data:context});
        }catch(err){
            return res.status(500).json(err);
        }
    },
    publish:async (req,res)=>{
        try {
            const status = req.body.status;
            await candidates.update({ispublished : !status},{where : { ispublished:status}})
            return res.status(200).json({message:'result publication updated',data:[]});
        } catch (error) {
            return res.status(500).json(err);
        }
    }
}