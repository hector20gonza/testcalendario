const { Error } = require("sequelize")
const {Nota} = require("../DB_conection")

const DelNotesHandler= async( id,start,end,text)=>{
 
 try {
 const nota= await Nota.findByPk(id)
 if(!nota) {
    throw new Error("La nota no existe")
 }
 nota.text = text || nota.text
 nota.start = start || nota.start
 nota.fecha= end |nota.end
 await nota.save()
 return nota;
 } catch (error) {
    throw new Error("Error al crear la nota")
 }

}
module.exports= DelNotesHandler