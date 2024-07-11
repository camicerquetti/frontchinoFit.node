const mongoose = require('mongoose')

const EjercicioSchema = mongoose.Schema(
    {
        
    },
    {
        timestamps: true,
        versionkey: false
    }
)

module.exports = mongoose.model("ejercicios", UserSchema)