var Modulo = function (nombre, temas) {  
  this.nombre = nombre;  
  this.temas = [].concat(temas)
}

Modulo.prototype.getNombre = function() {
  return this.nombre;
};

Modulo.prototype.setNombre = function(nombre) {
  return this.nombre = nombre;
};

Modulo.prototype.setTemas = function(tema) {
  return this.temas.push(tema);
};

Modulo.prototype.getTemas = function() {
  return this.temas;
};



