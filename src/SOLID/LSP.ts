// Liskov Substitution Principle (LSP) - Classes derivadas devem poder ser substituídas pelas suas classes bases

interface Bird {
  eat(): void;
}

interface FlyingBird extends Bird {
  fly(): void;
}

class Duck implements FlyingBird {
  fly(): void {}

  eat(): void {}

  quack(): void {}
}

class Ostrich implements Bird {
  eat(): void {}

  run(): void {}
}

function letFlyingBirdFly(bird: FlyingBird): void {
  bird.fly();
}

letFlyingBirdFly(new Duck());
