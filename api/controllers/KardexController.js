
module.exports = {
  listar: function(req, res) {
    var datos = {};
    Kardex
      .find().populate('idProducto')
      .then(function (registros) {
        res.view("kardex/listar",{registros:registros});
      })
      .catch(function (error) {
        res.negotiate(error);
      })
  },
  crear: function (req, res) {
    var data  = req.allParams();
    Kardex
      .create(data)
      .then(function (registro) {
        res.redirect("kardex/listar");
      })
      .catch(function (error) {
        res.negotiate(error);
      })
  },
  eliminar: function (req, res){
    var data  = req.params.id;
    Kardex
      .destroy(data)
      .then(function (registro) {
        res.redirect("kardex/listar");
      })
      .catch(function (error) {
        res.negotiate(error);
      })
  },
  buscar: function (req, res){
    var data = {idkardex:req.params.id};
    var registros = {}
    Kardex
      .find(data)
      .then(function (registro) {
        registros.registro = registro[0];
        return Producto.find()
      })
      .then(function (productos) {
        registros.productos = productos;
        console.log(registros)
        res.view("kardex/editar", {registros: registros})
      })

      .catch(function (error) {
        res.negotiate(error);
      })
  },
  actualizar: function(req, res){
    var id = req.params.id;
    var data = req.allParams();
    Kardex
      .update(id,data)
      .then(function (registros) {
        res.redirect("/kardex/listar");
      })
      .catch (function (error) {
        res.negotiate(error);
      })
  },
  formEliminar: function (req, res){
    var data = {idkardex:req.params.id};
    Kardex
      .find(data).populate('idProducto')
      .then(function (registro) {
        console.log(registro)
        res.view("kardex/eliminar", {registro: registro[0]})
      })
      .catch(function (error) {
        res.negotiate(error);
      })
  },
  formCrear: function (req, res){
    Producto
      .find()
      .then(function (productos) {
        res.view("kardex/crear", {productos: productos})
      })
      .catch(function (error) {
        res.negotiate(error);
      })
  }


};

