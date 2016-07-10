/**
 * ReporteController
 *
 * @description :: Server-side logic for managing reportes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var EJS = require("ejs2");
var phantom = require("node-phantom-simple");
var fs = require("fs");

module.exports = {

  generaReporte: function (req, res) {
    var fechaIni = req.body.fechaInicio;
    var fechaFin = req.body.fechaFin;
    var fechaInicio = new Date(fechaIni + ' 00:00:00');
    var fechaFinal = new Date(fechaFin + ' 23:59:59');
    fechaInicio.setDate(fechaInicio.getDate());
    fechaFinal.setDate(fechaFinal.getDate());
    var ejs = new EJS();
    Producto.find({
      createdAt: { '>': fechaInicio, '<': fechaFinal }
    }).exec(function (err, registros) {
      var data = {registros: registros};
      ejs.renderFile("views/reporte/listadoProducto.ejs", data, function (err, html) {
        phantom.create({path: require('phantomjs').path}, function (err, ph) {
          if (err) {
            return res.negotiate(err);
          }
          ph.createPage(function (err, page) {
            page.setting = {
              loadImages: true,
              localToRemoteUrlAccessEnabled: true,
              javascriptEnabled: true,
              loadPlugins: false
            };
            page.set("viewportSize", {width: 800, height: 600});
            page.set("paperSize", {
              format: "A4",
              orientation: "landscape",
              border: "0.5cm",
              header: {
                height: "2cm",
                contents: 'function(pageNum, numPages) { return "Página " + pageNum + " de " + numPages; }'
              }
            });
            page.set('content', html, function (err) {
              if (err) {
                res.negotiate(err);
              }
            });
            page.onLoadFinished = function (status) {
              if (status == "success") {
                setTimeout(function () {
                  page.render("archivos/reporte.pdf", {format: "pdf"}, function (err) {
                    if (err) {
                      console.log('Error rendering PDF: %s', err);
                      res.negotiate(err);
                    } else {
                      fs.readFile("archivos/reporte.pdf", function (err, contenido) {
                        if (err) res.negotiate(err);
                        res.set('Content-Type', 'application/pdf');
                        res.send(contenido);
                        ph.exit();
                      });
                    }
                  });
                }, 200);
              } else {
                ph.exit();
              }
            }
          })
        })
      })
    })
  },
};


