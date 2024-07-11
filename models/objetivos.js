const mongoose = require('mongoose')

const ObjetivoSchema = mongoose.Schema(
    {
        
    },
    {
        timestamps: true,
        versionkey: false
    }
)

module.exports = mongoose.model("objetivos", UserSchema)