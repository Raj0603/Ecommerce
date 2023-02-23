const Product = require("../models/productModel")
const ErrorHandler = require("../utils/errorhandler")
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");

// Create Products --Admin
exports.createProduct = catchAsyncErrors(async(req,res,next)=>{

    const product = await Product.create(req.body);

    res.status(201).json({
        sucess:true,
        product
    })
});


// Get all products

exports.getAllProducts = catchAsyncErrors(async(req,res)=>{


    const resultPerPage = 1
    const productCount = await Product.countDocuments();

    const apiFeatures = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage)
    const products = await apiFeatures.query;


    res.status(200).json({
        sucess:true,
        products,
        productCount
    })
});


// Get Product Details

exports.getProductDetails = catchAsyncErrors(async(req,res,next)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
    }
    
    res.status(200).json({
        success:true,
        product
    })


});

// Update Products -- Admin

exports.updateProduct= catchAsyncErrors(async(req,res,next)=>{
    let product = Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404))
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
});

// Delete Product --Admin

exports.deleteProduct = catchAsyncErrors(async(req,res,next)=>{

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

    
});