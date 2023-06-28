const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      set(value){
            //La función set se utiliza aquí para normalizar el valor del username. Específicamente, se utiliza el método toLowerCase() de JavaScript para convertir cualquier valor de username en minúsculas antes de guardarlo en la base de datos.
        this.setDataValue('name', value.toLowerCase())
      },
      //Propiedad validate, valida lo que necesite
      validate: {
        // len me da un rango de existencia del tipo de dato
        len: {
          args: [3,12],
          msg: 'Please enter a name containing 3 to 12 characters'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      defaultValue:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvSotZeYfNgCtlpf4tnmWrwK41MPGzIKZZfw&usqp=CAU', 
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    defense:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    height:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    weight:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
  },{
    timestamps: false, freezeTableName: true,
  });
};
/* El atributo "freezeTableName" en Sequelize se utiliza para especificar si se debe congelar o mantener el nombre del modelo como el nombre de la tabla en la base de datos, 
sin aplicar ninguna transformación o pluralización.

Por defecto, Sequelize realiza una transformación en el nombre del modelo al crear la tabla en la base de datos. Por ejemplo, si tienes un modelo llamado "User", Sequelize automáticamente creará una tabla llamada "Users" en la base de datos.

Sin embargo, al establecer "freezeTableName" en "true", Sequelize no realizará ninguna transformación en el nombre del modelo y lo utilizará directamente como el nombre de la tabla en la base de datos.

Esto puede ser útil en situaciones donde deseas tener un control total sobre el nombre de la tabla y no deseas que Sequelize realice ninguna modificación en el nombre del modelo al crear la tabla correspondiente.*/