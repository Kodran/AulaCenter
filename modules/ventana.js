var Ventana = function () {  
  this.nombre = "Ventana principal";
  this.iFrames = [];
}

Ventana.prototype.nombre = function() {
  return this.nombre;
};

Ventana.prototype.setIFrame = function(iFrame) {
  return this.iFrames.push(iFrame);
};

Ventana.prototype.getIFrames = function() {
  return this.iFrames;
};