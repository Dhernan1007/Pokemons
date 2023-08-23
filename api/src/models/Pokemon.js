const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
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
           this.setDataValue('name', value.toLowerCase())
      },
      validate: {
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
    /*flag*/ 
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      set(value) {
        // Convierte el valor en un booleano
        const boolValue = !!value;
        this.setDataValue('createdInDb', boolValue);
      }
    }
  },{
    timestamps: false, freezeTableName: true,
  });
};
