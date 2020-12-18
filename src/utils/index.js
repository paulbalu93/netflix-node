const {readJSON,writeJSON} = require ('fs-extra')




const readDB = async (filepath) =>
{
    try {
return await readJSON(filepath)
        
    } catch (error) {
        return error
    }
}

const writeDB = async (filepath,body) =>
{
    try {
        return await writeJSON(filepath,body)
    } catch (error) {
       return error
    }
}

module.exports= {readDB, writeDB,} 