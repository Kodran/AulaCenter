var page = require('webpage').create();

//viewportSize being the actual size of the headless browser
page.viewportSize = { width: 1024, height: 768 };
//the clipRect is the portion of the page you are taking a screenshot of
page.clipRect = { top: 0, left: 0, width: 1024, height: 768 };

page.onPageCreated = function(newPage) {
  console.log('A new child page was created! Its requested URL is not yet available, though.');
  // Decorate
  newPage.onClosing = function(closingPage) {
    console.log('A child page is closing: ' + closingPage.url);
  };
};
page.onConsoleMessage = function (msg) {
  console.log(msg);
};

//bootstrap our components
self.page.injectJs("lib/jquery.min.js"); console.log('jquery loaded...');
var amplify = require("./lib/amplify.core.js").amplify; console.log('amplify (pub/sub) loaded...');
var ventana = require("./modules/ventana"); console.log("ventana module loaded...");
var sesion = require("./modules/sesion"); console.log("sesion module loaded...");
var alumno = require("./modules/alumno"); console.log("alumno module loaded...");

//configurar eventos importantes
amplify.subscribe("main-window:loaded", function (mainWindow) {
  console.log("Selecciona un curso: ");
  var cursos = mainWindow.getCursos();
  for (var i = cursos.length - 1; i >= 0; i--) {
    var curso = cursos[i];
    console.log(curso.id + ") " + curso.name);
  }
  
  console.log("Por favor, elige un id: ");
  var system = require('system');
  var cursoId = parseInt(system.stdin.readLine());
  if (cursoId) {
    mainWindow.selectCurso(cursoId);
  }
  else {
    console.log("No seleccionaste un curso adecuado. No podemos continuar");
    phantom.exit();
  }
});

amplify.subscribe("main-window:changedCourse", function (mainWindow) {
  page.render('test-selecciona-curso.png');
});

console.log("Loading...");

var alumn = new alumno.Alumno("alumnop", "alumnop", []);
var mainWindow = ventana.Ventana(page);
console.log("Begin session");
mainWindow.openSession(alumn);
