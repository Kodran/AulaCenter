var Alumno = function (cursos) {  
  this.nombre;
  this.usuario;
  this.password;  
  this.cursos = [].concat(cursos);  
}

Alumno.prototype.setNombre = function(nombre) {
  return this.nombre = nombre;
};
Alumno.prototype.setSesion = function(cursos) {
  return this.cursos.push = cursos;
};
Alumno.prototype.setCurso = function(curso) {
  return this.cursos.push = curso;
};
Alumno.prototype.nombre = function() {
  return this.nombre;
};


Alumno.prototype = new Sesion();
Alumno.prototype.constructor = Alumno;
