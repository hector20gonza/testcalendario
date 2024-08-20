const DelNotesHandler = require("../handlers/DelNotesHandler")

const  delNotes = async (req,res)=>{

    
  
   
    try {
        
        const {id}= req.params;
        console.log(id);
        
        if(!id) return new Error("Faltan datos del id")
            
        await DelNotesHandler(id)
        return res.status(200).json({message: "Nota actualizada"})
        
    } catch (error) {
        res.status(500).send("Ha ocurrido un error."+ error.message)
    }
    
    
}
module.exports=delNotes