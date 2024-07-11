const mongoose = require('mongoose')

const FormularioSchema = mongoose.Schema(
    {
        
    },
    {
        timestamps: true,
        versionkey: false
    }
)

module.exports = mongoose.model("formulario", UserSchema)