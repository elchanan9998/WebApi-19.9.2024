module.exports={
    getAllcategorys:(req,res)=>{
        res.status(200).json({Msg:"All categorys"});
    },
    getcategoryById:(req,res)=>{
        res.status(200).json({Msg:`category By Id ${req.params.id}`});
    } ,
    addNewcategory:(req,res)=>{
        res.status(200).json({Msg:"Add New category", body:req.body});
    } ,
    updatecategoryById:(req,res)=>{
        res.status(200).json({Msg:"Update category", body:req.body});
    } ,
    deletecategory:(req,res)=>{
        res.status(200).json({Msg:`category Deleted ${id}`});
    }
};