const mongoose = require('mongoose')

const RutinaSchema = mongoose.Schema(
    {
        
    },
    {
        timestamps: true,
        versionkey: false
    }
)

module.exports = mongoose.model("rutinas", UserSchema)