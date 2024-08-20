const addNotesHandler = require("../handlers/AddNotesHandler")

const addNotes = async (req,res)=>{

    const {start,end,title}= req.body;
     const text= title
 
   
    try {
        if(!start && !end && !text) return new Error("Faltan datos en la nota")
            
        await addNotesHandler(start,end,text)
        return res.status(200).json({message: "Nota creada"})
        
    } catch (error) {
        res.status(500).send("Ha ocurrido un error."+ error.message)
    }
    
    
}
module.exports=addNotes