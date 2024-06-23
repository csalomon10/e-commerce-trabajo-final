import mongoose from 'mongoose';

const cartCollection = 'carts';

const cartSchema = new mongoose.Schema({
    
    user: 
    { type: mongoose.Schema.Types.ObjectId, ref: "users" 

    },
    products: {
        type:[
            {
                _id:{
                    type: mongoose.Types.ObjectId,
                    ref: 'products'
                },
                quantity:{
                    type: Number,
                    default:1
                },
                title:{
                    type: String,
                    required: true
                },
                price:{
                    type: Number,
                    required: true
                },
                thumbnail: {
                    type: String,
                    required: false
                }
                    
            }
        ],
        default:[]
    }
});
cartSchema.pre('find', function(next){
    this.populate('products._id');
    next();
});
export const cartModel = mongoose.model(cartCollection, cartSchema)

