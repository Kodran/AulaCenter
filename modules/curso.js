var Curso = function (nombre, id) {  
  this.nombre = nombre;
  this.id = id;
  this.modulos = [];
};

Curso.prototype.setNombre = function(nombre) {
  return this.nombre = nombre;
};

Curso.prototype.getNombre = function() {
  return this.nombre;
};

Curso.prototype.setModulo = function(modulo) {
  return this.modulos.push = modulo;
};

Curso.prototype.getModulos = function(modulo) {
  return this.modulos;
};

/*Curso.prototype.getCursosFromDOM = function() {	
  return $('iframe[name="lateral"]');
};*/

exports.Curso = Curso;