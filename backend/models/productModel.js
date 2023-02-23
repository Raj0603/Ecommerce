const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter your Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "Please enter your Description"]
    },
    price:{
        type:Number,
        required:[true, "Please enter product Price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },

    images:[
        {
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
        }
    ],
    category:{
        type:String,
        required:[true, "Please enter Product Category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter product stock"],
        maxLength:[5,"Stock cannot exceed 5 characters"],
        default:1
    },
    numofReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Product",productSchema);