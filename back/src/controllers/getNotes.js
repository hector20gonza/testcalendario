const getNotesHandler = require("../handlers/getNotesHandler")

const getNotes = async (req,res)=>{
    try {
    
       const result = await getNotesHandler()
        return res.status(200).send(result)
    } catch (error) {
       
        
        res.status(500).send("Ha ocurrido un error."+ error.message)
    }
}

module.exports=getNotes