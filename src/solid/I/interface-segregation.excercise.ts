(() => {
  interface Bird {
    fly(): void;
    eat(): void;
    swim(): void;
  }

  class Duck implements Bird {
    public fly() {}
    public eat() {}
    public swim() {}
  }

  class Tucan implements Bird {
    public fly() {}
    public eat() {}
    // los tucanes no pueden nadar pero igual deben de implementar esta interfaz
    public swim(): void {
      throw new Error("Tucan can not swim");
    }
  }

  class Ostrich implements Bird {
    // Un avestruz no puede volar ni nadar
    public fly(): void {
      throw new Error("Ostrich can not fly.");
    }
    public swim(): void {
      throw new Error("Ostrich can not swim.");
    }
    public eat(): void {}
  }
})();
