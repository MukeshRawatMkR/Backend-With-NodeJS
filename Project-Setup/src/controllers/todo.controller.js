function getTodos(req, res){
 console.log("todocontorller");
    return res.json({
        data:[]
    });
}
function createTodo(req, res){
    return res.json({
        data:[]
    });
}

module.exports ={ getTodos, createTodo};