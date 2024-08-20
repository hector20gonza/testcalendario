
 require("dotenv").config();
 const { Sequelize } = require("sequelize");
 const {DB_USER,DB_PASSWORD, DB_HOST,DB_NAME } = process.env;
 const NoteModel = require("./models/Nota");
 const UserModel = require("./models/users")
 
//  /*const sequelize = new Sequelize(
//    DB_URL,
//     { logging: false, native: false }
//   );
//  */
//  const sequelize = new Sequelize( DB_URL, { logging: false, native: false }
//  );
  const sequelize = new Sequelize(
    `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
  );

 UserModel(sequelize);

NoteModel(sequelize);
 
 const { Nota,users} =
   sequelize.models;
 

 
 module.exports = {
   conn: sequelize,
  Nota,
  users
 };