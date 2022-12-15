(() => {
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {}
  }

  class User extends Person {
    private lastAccess: Date;

    constructor(
      private email: string,
      private role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      private lastOpenFolder: string,
      private workingDirectory: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(email, role, name, gender, birthDate);
    }
  }

  const userSettings = new UserSettings(
    "user/home",
    "home",
    "johndoe@gmail.com",
    "user",
    "John",
    "M",
    new Date("2000-10-10")
  );
})();
