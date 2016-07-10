
module.exports = {

  attributes: {
    idkardex: {
      type: "integer",
      autoIncrement: true,
      unique: true,
      primaryKey: true
    },
    tipo :{
      type:"integer"
    },
    cantidad:{
      type:"integer"
    },
    idProducto:{
      model: "Producto"
    }
  }
};

