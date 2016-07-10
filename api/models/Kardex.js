var get_0_format = function(part_date){
  if (part_date<=9) part_date = '0'+part_date
  return part_date
};

var get_format_date = function(fecha_hora){
  if (fecha_hora) {
    var dia = get_0_format(fecha_hora.getDate());
    var mes = get_0_format((fecha_hora.getMonth() +1));
    var year = fecha_hora.getFullYear();
    var hora = get_0_format(fecha_hora.getHours());
    var minuto = get_0_format(fecha_hora.getMinutes());
    var formato_fecha = (dia + '/' + mes + '/' + year + ' ' + hora+ ':' + minuto);
    return formato_fecha;
  } else {
    return fecha_hora
  }
};

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
    },
    formatCreate:function () {
      return get_format_date(this.createdAt);
    },
    formatUpdate:function () {
      return get_format_date(this.updatedAt);
    }

  }
};

