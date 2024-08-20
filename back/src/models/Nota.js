const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Nota", {
  
    start: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    
    end: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
   
  });
};

