const {Nota} = require("../DB_conection")


const AddNotesHandler= async( start,end,text)=>{
 console.log(start,end,text)
const startDate= new Date(start)
const endDate= new Date(end)

 try {
   const result= await Nota.create({
    start:startDate,
    end:endDate,
    text})
   return result
    
 } catch (error) {
    throw new Error("Error al crear la nota")
 }
}

module.exports= AddNotesHandler