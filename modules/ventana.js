var Ventana = function (phantomPage) {
	var self = this;
  	self.nombre = "Ventana principal";
  	self.iFrames = {};
  	self.page = phantomPage;
};

//first thing to do :)
Ventana.prototype.openSession = function (alumno) {
	var self = this;
	self.alumno = alumno;
	self._loadLibs();

	var postBody = self.alumno.getLoginUrlQuery();
	console.log("loading main page...");
	self.page.open('http://www.aulacenter.com/recursos/acceso.asp', 'POST', postBody, function(status) {
    function checkReadyState() {
    	console.log("page is: " + status);
          setTimeout(function () {
              if ("success" === status) {
                  self.onHtmlPageReady();
              } else if ("fail" === status) {
              	console.log("Huston! Problemas al entrar a la página principal. No podremos continuar.");
              	phantom.exit();
              } else {
                  checkReadyState();
              }
          }, 200);
      }

      checkReadyState();
  });
};

Ventana.prototype._loadLibs = function () {
    require("./curso.js"); console.log("loaded curso module");
    require("./modulo.js"); console.log("loaded module module");
    require("./tema.js"); console.log("loaded tema module");
    require("./leccion.js"); console.log("loaded leccion module");
    require("./anexo.js"); console.log("loaded anexo module");
};

Ventana.prototype.onHtmlPageReady = function () {
	var self = this;
	console.log("Cargado página principal. Esperemos un poco a que se cargue el javascript :)");

	setTimeout(function () {
		page.render('screenshot.png');
		amplify.publish("main-window:loaded", self);
	}, 15000);
};

Ventana.prototype.nombre = function() {
  return this.nombre;
};

Ventana.prototype.setIFrame = function(name, iFrame) {
  return this.iFrames[name] = iFrame;
};

Ventana.prototype.getIFrames = function() {
  return this.iFrames;
};

Ventana.prototype.getCursos = function () {
	var self = this;
	var cursosList = self.page.evaluate(function () {
		var cursos = [];
		$("#idedicion > option").each(function (index, el) {
			var curso = {
				name: el.text,
				id: el.value
			};
			cursos.push(curso);
		});
		return cursos;
	});
	console.log("cursos encontrados: " + cursosList);
	return cursosList;
};

Ventana.prototype.selectCurso = function (cursoId) {
	self.page.evaluate(function (cursoId) {
		var select = document.getElementById("idedicion");
		select.value = cursoId;
	}, cursoId);

	setTimeout(function () {
		amplify.publish("main-window:changedCourse", self);
	}, 10000);
};

var v = null;
exports.Ventana = function (phantomPage) {
	if (v === null) {
		v = new Ventana(phantomPage);
	};
	return v;
};