const db = require('../models');
const {students} = db;

const {students} = require("../")
module.exports = async (req,res) => {
    try {
        const {regNumber} = req.body;
        const user = await students.findOne({
            where:{email : email, password : password}
        });
    }catch(err){

    }
    

}