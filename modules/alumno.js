var Alumno = function (userName, password, cursos) {  
  this.usuario = userName;
  this.password = password;  
  this.cursos = [].concat(cursos);  
};
var sesion = require("./sesion");
Alumno.prototype = new sesion.Sesion();

Alumno.prototype.setSesion = function(cursos) {
  return this.cursos.push = cursos;
};
Alumno.prototype.setCurso = function(curso) {
  return this.cursos.push = curso;
};
Alumno.prototype.getLoginUrlQuery = function () {
	return "usuario=" + this.usuario + "&clave=" + this.password + "&x=14&y=19";
};

Alumno.prototype.constructor = Alumno;

exports.Alumno = Alumno;