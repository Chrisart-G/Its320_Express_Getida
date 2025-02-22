
import mongoose from "mongoose";



const quotesSchema = mongoose.Schema({
    quotes: {
        type: String,
        required: [true, 'wew']
    },
    author: {
        type: String,
        required: [true, 'wew']
    },
    published: {
        type: String,
        required: [true, 'wew']
    },
    title: {
        type: String,
        required: [true, 'wew']
    }

})

//export default userSchema;
export default mongoose.model('Quotes', quotesSchema)