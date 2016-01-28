var Sesion = function (phantomPage) {  
	var self = this;
	self.usuario = null;
	self.password = null;
};

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
	this.usuario = usuario;
	this.password = password;
};

exports.Sesion = Sesion;