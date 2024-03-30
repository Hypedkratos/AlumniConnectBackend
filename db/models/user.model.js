import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        required: true
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        toLowerCase:true,
        
    },
    password: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
    },
    branch: {
        type: String,
        required: true,
    },
    passingYear: {
        type: String,
        required: true,
    },
    phone:{
        type:String,
    },
    linkedin: {
        type: String,
    },
    github: {
        type: String,
    },
    instagram: {
        type: String,
    },
    BIO: {
        type: String,
    },
    alumni: {
        type: Boolean,
        required: true
    },
    profilePic: {
        type: String,
    },
    curentJob: {
        type: String,
    }

}, {
    timestamps: true
});


// hash password
usersSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)

    this.password = hash
    next()
})


//compare password
usersSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

//export 
const Users = mongoose.models.users || mongoose.model("users", usersSchema);
export default Users;