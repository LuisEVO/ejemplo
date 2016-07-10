
module.exports = {

  attributes: {
    idProducto: {
      unique: true,
      type: "integer",
      autoIncrement: true,
      primaryKey: true
    },
    nombreProducto: {
      type: "string"
    },
    precio:{
      type: "float"
    },
    stockInicial: {
      type: "integer"
    },
    kardex: {
      collection: "Kardex",
      via: "idProducto"
    }
  }
};

