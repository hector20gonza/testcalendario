const UpdateNotesHandler = require("../handlers/UpdateNotesHandler")

const updateNotes = async (req,res)=>{

    const {id}= req.params;
    const {start,end,title}= req.body;

    const startDate= new Date(start)
    const endDate= new Date(end)
    const text = title
    try {
        if(!id && !nota) return new Error("Faltan datos ")
            
        await UpdateNotesHandler(id,start,end,text)
        return res.status(200).json({message: "Nota actualizada"})
        
    } catch (error) {
        res.status(500).send("Ha ocurrido un error."+ error.message)
    }
    
    
}
module.exports= updateNotes