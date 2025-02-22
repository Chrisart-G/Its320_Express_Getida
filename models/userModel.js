
import mongoose from "mongoose";



const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'wew']
    },
    email: {
        type: String,
        required: [true, 'wew']
    },
    password: {
        type: String,
        required: [true, 'wew']
    }
})

//export default userSchema;
export default mongoose.model('User', userSchema)