
module.exports = {
  listar: function(req, res) {
    Kardex
      .find().populate('idProducto')
      .then(function (registros) {
        console.log(registros)
        res.view("kardex/listar",{registros:registros});
      })
      .catch(function (error) {
        res.negotiate(error);
      })
  },
  crear: function (req, res) {
    var data  = req.allParams();
    console.log(data);
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
    console.log(data);
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
    var data = {idKardex:req.params.id};
    Kardex
      .find(data)
      .then(function (registro) {
        res.view("kardex/editar", {registro: registro[0]})
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
    var data = {idKardex:req.params.id};
    Kardex
      .find(data)
      .then(function (registro) {
        res.view("kardex/eliminar", {registro: registro[0]})
      })
      .catch(function (error) {
        res.negotiate(error);
      })
  },


};

