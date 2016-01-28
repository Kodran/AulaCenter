var Anexo = function (url) {  
  this.url = url;
}

Anexo.prototype.getUrl = function() {
  return this.url;
};

Anexo.prototype.setUrl = function(url) {
  return this.url = url;
};

exports.Anexo = Anexo;