const {Nota} = require("../DB_conection")

const DelNotesHandler= async( id)=>{

 try {
   const del = await Nota.destroy({where :{id}});
    if(del){
        return del
    }
    else{
        return "error al eliminar el registro"
    }
 } catch (error) {
    throw new Error("Error al eliminar la nota")
 }

}
module.exports= DelNotesHandler