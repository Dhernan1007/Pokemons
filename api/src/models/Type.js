// Luego le injectamos la conexion a sequelize.
const {DataTypes} = require('sequelize')
//DataTypes --> contiene todos los tipos de datos que sequelize soporta
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            set(value){
 //La función set se utiliza aquí para normalizar el valor del username. Específicamente, se utiliza el método toLowerCase() de JavaScript para convertir cualquier valor de username en minúsculas antes de guardarlo en la base de datos.
              this.setDataValue('name', value.toLowerCase())
        }
    }}, 
    { timestamps: false, freezeTableName: true });
};
