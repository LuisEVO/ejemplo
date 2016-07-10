
module.exports = {
  listar: function (req, res) {
    Producto
      .find()
      .then(function (registros) {
        res.view("producto/listar2",{registros:registros});
      })
      .catch(function (error) {
        res.negotiate(error);
      })
  },
  crear: function (req, res) {
    var data  = req.allParams();
    console.log(data);
    Producto
      .create(data)
      .then(function (registro) {
        res.redirect("producto/listar");
      })
      .catch(function (error) {
        res.negotiate(error);
      })
  },
  eliminar: function (req, res){
    var data  = req.params.id;
    console.log(data);
    Producto
      .destroy(data)
      .then(function (registro) {
        res.redirect("producto/listar");
      })
      .catch(function (error) {
        res.negotiate(error);
      })
  },
  buscar: function (req, res){
    var data = {idProducto:req.params.id};
    Producto
      .find(data)
      .then(function (registro) {
        res.view("producto/editar", {registro: registro[0]})
      })
      .catch(function (error) {
        res.negotiate(error);
      })
  },
  actualizar: function(req, res){
    var id = req.params.id;
    var data = req.allParams();
    Producto
      .update(id,data)
      .then(function (registros) {
        res.redirect("/producto/listar");
      })
      .catch (function (error) {
        res.negotiate(error);
      })
  },
  formEliminar: function (req, res){
    var data = {idProducto:req.params.id};
    Producto
      .find(data)
      .then(function (registro) {
        res.view("producto/eliminar", {registro: registro[0]})
      })
      .catch(function (error) {
        res.negotiate(error);
      })
  },


};

