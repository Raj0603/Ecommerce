const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {

    const myPayment = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "inr",
        metadata:{
            company: "Ecommerce",
        },
        
    });

    res.status(200).json({
        client_secret: myPayment.client_secret,
        success:true
    });
})

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
    res.status(200).json({
        stripeApiKey: process.env.STRIPE_API_KEY,
    });
})
