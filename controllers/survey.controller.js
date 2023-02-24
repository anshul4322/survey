const {Survey} = require('./survey.model');

const saveData = (async(req,res) => {
    let data;
    console.log(req.body,"body");
    data = await Survey.create(req.body);
    res.status(200).send({data});
    
})          

module.exports = {
    saveData,
};

