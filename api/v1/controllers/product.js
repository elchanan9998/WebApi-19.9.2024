module.exports={
    getAllProducts:(req,res)=>{
        res.status(200).json({Msg:"All Products"});
    },
    getProductById:(req,res)=>{
        res.status(200).json({Msg:`Product By Id ${req.params.id}`});
    } ,
    addNewProduct:(req,res)=>{
        res.status(200).json({Msg:"Add New Product", body:req.body});
    } ,
    updateProductById:(req,res)=>{
        res.status(200).json({Msg:"Update Product", body:req.body});
    } ,
    deleteProduct:(req,res)=>{
        res.status(200).json({Msg:`Product Deleted ${id}`});
    }
};