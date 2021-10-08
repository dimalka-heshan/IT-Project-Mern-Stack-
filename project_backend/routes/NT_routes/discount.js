const express = require('express');
const discount = require('../../models/NT_models/discount');
const router = require("express").Router();
const rounter = express.Router();

//add discount
router.post("/add" ,(req,res)=>{

    let newdiscount = new discount(req.body);

    newdiscount.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"discount save successfully"
        });
    });
});

//Display discount
router.get("/display",(req,res)=>{
    discount.find().exec((err,discount)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingdiscount:discount,
        });
    }); 
});

//update Discount
router.route("/update/:id").put(async(req, res)=>{

    discount.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,discount)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"update succesfully"
            })
        }
    )
})

// delete discount

router.delete("/delete/:id",(req, res)=>{

    discount.findByIdAndRemove(req.params.id).exec((err,deletediscount)=>{

        if(err) return res.status(400).json({
            message: "Delete unsuccessfull",err
        });
        return res.json({
            message:"Delete successful",deletediscount
        });
    });
       
})


//get a specific products

router.route("/display/:id").get((req,res)=>{

    let id = req.params.id; 
 
    discount.findById(id,(err,discount)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            discount
        });
    });
 })

module.exports = router;