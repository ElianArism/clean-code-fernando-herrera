import {
  Audi,
  Honda,
  Tesla,
  Toyota,
  Vehicle,
} from "./liskov-substitution-2.solution";

(() => {
  const printCarSeats = (cars: Vehicle[]) => {
    for (const car of cars)
      console.log(car.constructor.name, car.getNumberOfSeats());
  };

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
  ];

  printCarSeats(cars);
})();
