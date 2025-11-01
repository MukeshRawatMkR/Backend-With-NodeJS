function createTodoValidator(req, res, next){
    if(!req.body.todoText){
        return res.json({mgs:"Invalid req"});
    }
next();
}
module.exports={createTodoValidator};