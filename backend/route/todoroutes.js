const express=require('express');
const router=express.Router();
const todoModel=require('../model/todoData');

router.get('/',async (req,res)=>{
    try {
        const data = await todoModel.find();
        res.status(200).send(data);
    } catch (error) {
        res.send(error);
    }
})

router.post('/add',async (req,res)=>{
    try {
        const data = new todoModel(req.body);
        const savedata = await data.save();
        res.status(200).json({success:true,message:"POST OPERATION SUCCESSFULL"});
    } catch (error) {
        res.status(404).json({success:false,message:"POST OPERATION FAILED"});
    }
})

router.delete('/delete/:id',async (req,res)=>{
    try {
        const id=req.params.id;
        const data = await todoModel.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"DELETE OPERATION DONE SUCCESSFULLY"});
    } catch (error) {
        res.status(404).json({success:false,message:"DELETE OPERATION FAILED"});
    }
})

module.exports=router;

