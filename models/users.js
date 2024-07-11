const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        usuario:{
            type: String,
            required: true   
        },
        password:{
            type: String,
            required: true
            },
        email:{
            type: String,
            required: true,
            unique: true
        },
        rol:{
            type: ['user', 'admin'],
            default: 'user'
            }
    },
    {
        timestamps: true,
        versionkey: false
    }
)

module.exports = mongoose.model("users", UserSchema)