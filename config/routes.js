/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },


  'get /producto/listar': {
    controller: 'ProductoController',
    action : "listar"
  },
  'post /producto/crear':{
    controller: 'ProductoController',
    action : "crear"
  },
  'get /producto/crear': {
    view: 'producto/crear'

  },
  'post /producto/eliminar/:id':{
    controller: 'ProductoController',
    action : "eliminar"
  },
  'get /producto/editar/:id':{
    controller: 'ProductoController',
    action: "buscar"
  },
  'post /producto/actualizar/:id':{
    controller: 'ProductoController',
    action : "actualizar"
  },
  'get /producto/form/eliminar/:id':{
    controller: 'ProductoController',
    action: "formEliminar"
  },


  'get /kardex/listar': {
    controller: 'KardexController',
    action : "listar"
  },
  'get /kardex/crear':{
    controller: 'KardexController',
    action : "formCrear"
  },
  'post /kardex/crear':{
    controller: 'KardexController',
    action : "crear"
  },

  'post /kardex/eliminar/:id':{
    controller: 'KardexController',
    action : "eliminar"
  },
  'get /kardex/editar/:id':{
    controller: 'KardexController',
    action: "buscar"
  },
  'post /kardex/actualizar/:id':{
    controller: 'KardexController',
    action : "actualizar"
  },
  'get /kardex/form/eliminar/:id':{
    controller: 'KardexController',
    action: "formEliminar"
  },

  'post /reporte/producto': {
    controller: 'ReporteController',
    action: "generaReporte"
  }


  /****************************t***********************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
