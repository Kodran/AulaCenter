var page = require('webpage').create();

//viewportSize being the actual size of the headless browser
page.viewportSize = { width: 1024, height: 768 };
//the clipRect is the portion of the page you are taking a screenshot of
page.clipRect = { top: 0, left: 0, width: 1024, height: 768 };

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
    var htmlContent = page.evaluate(function () {
        return document.documentElement.outerHTML;
    });

    //console.log(htmlContent);
  	page.render("currentPage.png");		
    phantom.exit();
}


page.onPageCreated = function(newPage) {
  console.log('A new child page was created! Its requested URL is not yet available, though.');
  // Decorate
  newPage.onClosing = function(closingPage) {
    console.log('A child page is closing: ' + closingPage.url);
  };
};
