var Tema = function (nombre, lecciones) {  
  this.nombre = nombre;  
  this.paginas = [].concat(lecciones)
};
var leccion = require("./leccion.js");
Tema.prototype = new leccion.Leccion();

Tema.prototype.getNombre = function() {
  return this.nombre;
};

Tema.prototype.setNombre = function(nombre) {
  return this.nombre = nombre;
};

Tema.prototype.getLecciones = function() {
  return this.paginas;
};

Tema.prototype.constructor = Tema;

exports.Tema = Tema;
