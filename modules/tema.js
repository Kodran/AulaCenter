var Tema = function (nombre, lecciones) {  
  this.nombre = nombre;  
  this.paginas = [].concat(lecciones)
}

Tema.prototype.getNombre = function() {
  return this.nombre;
};

Tema.prototype.setNombre = function(nombre) {
  return this.nombre = nombre;
};

Tema.prototype.getLecciones = function() {
  return this.paginas;
};

Modulo.prototype = new Leccion();
Modulo.prototype.constructor = Tema;

