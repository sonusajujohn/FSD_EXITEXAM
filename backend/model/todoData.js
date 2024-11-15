const mongoose=require('mongoose');

const todoSchema=mongoose.Schema({
    todoDesc:{type:String,required:true},
    stats:{type:String,required:true},
})

const todoData=mongoose.model('todo',todoSchema);

module.exports=todoData;