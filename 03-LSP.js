/*

L: Liskov Substituion Principle
Las subclases deben ser sustituibles por sus clases base,
es decir, los objetos de una clase deben poder ser reemplazados por los
objetos de una subclase sin afectar a la corrección del programa.

*/

// Bad
function makeRequest(url, errorHandler) {
  fetch(url)
    .then(response => response.json())
    .catch(error => {
      errorHandler.handle(error)
    })
}

// Better
function makeRequest(url, errorHandler) {
  fetch(url)
    .then(response => response.json())
    .catch(error => {
      errorHandler.handle(error)
    })
}

const consoleErrorHandler = {
  handle: function(error) {
    console.log(error)
  }
}

const externalErrorHandler = {
  handle: function(error) {
    sendErrorToExternalService(error)
  }
}

makeRequest('https://my-api.com/data', consoleErrorHandler)
makeRequest('https://my-api.com/data', externalErrorHandler)