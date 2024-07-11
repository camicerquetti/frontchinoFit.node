const express = require('express')
const router = express.Router();

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    return fileName.split('.').shift();
}

fstat.readerSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file)
    if (name !== 'index'){
        console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`, require(`./${file}`))
    }
})

module.exports = router;