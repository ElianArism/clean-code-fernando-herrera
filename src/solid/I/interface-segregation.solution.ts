(() => {
  interface Bird {
    eat(): void;
  }

  interface FlyingBird {
    fly(): void;
  }

  interface SwimmerBird {
    swim(): void;
  }

  class Ostrich implements Bird {
    public eat(): void {}
  }

  class Tucan implements Bird, FlyingBird {
    public eat() {}
    public fly() {}
  }

  class Duck implements Bird, FlyingBird, SwimmerBird {
    public fly() {}
    public eat() {}
    public swim() {}
  }
})();
