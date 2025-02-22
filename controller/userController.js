import User from '../models/userModel.js'

function  createUser(req, res){

    const {username, email, password} = req.body;
    if (!username || !email || !password){
        res.send('please fill out the all field.')
    }

    // const exists = User.findOne({username})
    // if (exists){
    //     res.status(409).send('Username is already exists.')
    //     throw new Error('User already exists.')
    // }

    const newUser = User.create({
        username , email , password
    })
    if(!newUser){
        res.status(500).send('erro while creating User')

    }
    return res.status(200).send('User Successfully created.')
}

export {createUser};

