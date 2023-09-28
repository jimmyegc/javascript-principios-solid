/*

I: Interface Segregation Principle
Ninguna clase debería ser forzada a implementar interfaces o
métodos que no va a utilizar

*/

// Bad
class Product {
  
  getDetails() {

  }

  saveToDb() {

  }

  displayInFrontEnd() {

  }

}

class DigitalProduct extends Product {

}

//Better
class Product {
  getDetails() {

  }
  displayInFrontEnd() {

  }
}

class PhysicalProduct extends Product {
  saveToDb() {

  }
}

class DigitalProduct extends Product {
  
}