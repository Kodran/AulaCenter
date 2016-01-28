var Curso = function (nombre, modulos) {  
  this.nombre = nombre;
  this.modulos = [].concat(modulos);
}

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

Curso.prototype.getCursosFromDOM = function() {	
  return $('iframe[name="lateral"]');
};
