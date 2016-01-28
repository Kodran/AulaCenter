var Sesion = function () {  
  this.usuario;
  this.password;
  this.sesionId;
}

Sesion.prototype.getUsuario = function() {
  return this.usuario;
};

Sesion.prototype.getPassword = function(iFrame) {
  return this.password;
};

Sesion.prototype.getSesion = function() {
	return (this.usuario + '&' + this.password + '&' + this.sesionId);  
};

Sesion.prototype.login = function(usuario, password) {

	//codigo login ....
	this.usuario = usuario;
	this.password = password;
	this.sesionId = 1234151;
	return this.sesionId;  
};