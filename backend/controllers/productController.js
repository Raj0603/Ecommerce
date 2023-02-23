const Product = require("../models/productModel")


// Create Products --Admin
exports.createProduct = async(req,res,next)=>{

    const product = await Product.create(req.body);

    res.status(201).json({
        sucess:true,
        product
    })
}


// Get all products
exports.getAllProducts = async(req,res)=>{

    const products = await Product.find();
    res.status(200).json({
        sucess:true,
        products
    })
}


// GetProduct Details

exports.getProductDetails = async(req,res,next)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }
    
    res.status(200).json({
        success:true,
        product
    })


}

// Update Products -- Admin

exports.updateProduct= async(req,res,next)=>{
    let product = Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true,
        useFindandModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
}

// Delete Product --Admin

exports.deleteProduct = async(req,res,next)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    await product.remove()

    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    })

    
}