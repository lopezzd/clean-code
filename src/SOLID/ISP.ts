// Interface Segregation Principle (ISP) - Nenhuma classe deve ser forçada a depender de métodos que ela não usa

interface Workable {
  work(): void;
}

interface Eatable {
  eat(): void;
}

class Human implements Workable, Eatable {
  work() {
  }

  eat() {
  }
}

class Robot implements Workable {
  work() {
  }
}
