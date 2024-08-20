const {Nota} = require("../DB_conection")

const getNotesHandler = async()=>{

 try {
    const result= await Nota.findAll()
    console.log(result)
    return result
 } catch (error) {
  throw new Error("ha ocurrido un error al traer todas las notas")  
 }
}
module.exports= getNotesHandler