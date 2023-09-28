/*

D: Dependency Inversion Principle
Los módulos de alto nivel no deben depender de modulos de bajo nivel,
ambos deben depender de abstracciones además, las abstracciones no deben
depender de los detalles deben depender de las abstracciones.

*/

// Bad
class MySQLConnection {
  connect() {

  }
}

class PasswordReminder {
  constructor() {
    this.dbConnection = new MySQLConnection()
  }
}

// Better
class MySQLConnection {
  connect() {

  }
}

class PostgreSQLConnection {
  connect() {

  }  
}

class PasswordReminder {
   constructor(dbConnection) {
    this.dbConnection = dbConnection
   }
}

