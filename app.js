var page = require('webpage').create();

//viewportSize being the actual size of the headless browser
page.viewportSize = { width: 1024, height: 768 };
//the clipRect is the portion of the page you are taking a screenshot of
page.clipRect = { top: 0, left: 0, width: 1024, height: 768 };

page.onConsoleMessage = function (msg) {
  console.log(msg);
};

console.log("Hola!");

var postBody = 'usuario=alumnop&clave=alumnop&x=14&y=19';
page.open('http://www.aulacenter.com/recursos/acceso.asp', 'POST', postBody, function(status) {
  
	function checkReadyState() {
        setTimeout(function () {
            var readyState = page.evaluate(function () {
                return document.readyState;
            });

            if ("complete" === readyState) {
                onPageReady();
            } else {
                checkReadyState();
            }
        });
    }

    checkReadyState();

});

function onPageReady() {    

    //esperamos a que la página se cargue bien...
    /*setTimeout(function () {
      page.render("currentPage.png");

      //click specific menu option
      page.switchToFrame('iframe[name="lateral"]');      

      page.evaluate(function () {        
        console.log(document.documentElement.outerHTML);
      });

    }, 5000);*/   
    
      page.injectJs("lib/jquery.min.js"); console.log('jquery loaded...');            
      page.injectJs("modules/ventana.js"); console.log('ventana module loaded...');  
      page.injectJs("modules/sesion.js"); console.log('sesion module loaded...');  
      page.injectJs("modules/alumno.js"); console.log('alumno module loaded...');  
      page.injectJs("modules/curso.js"); console.log('cursos module loaded...');  
      page.injectJs("modules/modulo.js"); console.log('modulo module loaded...');  
      page.injectJs("modules/tema.js"); console.log('tema module loaded...');  
      page.injectJs("modules/leccion.js"); console.log('leccion module loaded...');  
      page.injectJs("modules/anexo.js"); console.log('anexo module loaded...');  
      
             
      page.evaluate(function() {

          var ventana = new Ventana();
          console.log(ventana.nombre);
          ventana.setIFrame(1);          
          console.log(ventana.getIFrames());

          var alumno = new Alumno();
          alumno.login("alumnop","alumnop");
          console.log("alumno sesion : " + alumno.getSesion());          

          var anexos = [new Anexo("www.google.com"), new Anexo("www.microsoft.com")];
          var lecciones = [new Leccion("leccion 1", anexos), new Leccion("leccion 2", anexos)];
          var temas = [new Tema('tema 1', lecciones), new Tema('tema 2', lecciones)]
          var modules = new Modulo('Module 1', temas);

          modules.getTemas().forEach(function(tema){
            console.log('lecciones por tema : ' + JSON.stringify(tema.getLecciones()));
            
            tema.getLecciones().forEach(function(leccion){
                console.log('anexos por leccion : ' + JSON.stringify(leccion.getAnexos()));
            })
          })
          

          var modules = [{module: 1},{module: 2}];
          var cursos = new Curso('curso 1', modules);
          console.log(cursos.getNombre());
          console.log(JSON.stringify(cursos.getModulos()));          


          /*
          var cursos = new Curso();
          cursos.setNombre("curso1");
          cursos.setModulo(1);
          console.log(cursos.getNombre());
          */
          

      });
          
        
    var htmlContent = page.evaluate(function () {
        return document.documentElement.outerHTML;
    });
   
}

function recarga(){
  console.log("peticion recarga")     
      page.evaluate(function() {      
        $.get( "http://campus.aulacenter.com/recarga.asp", function( data ) {
          console.log("Data get:"  + data);
        });

      });
      page.render('fpage1.png');
}

page.onPageCreated = function(newPage) {
  console.log('A new child page was created! Its requested URL is not yet available, though.');
  // Decorate
  newPage.onClosing = function(closingPage) {
    console.log('A child page is closing: ' + closingPage.url);
  };
};
