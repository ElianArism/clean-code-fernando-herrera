(() => {
  type Gender = "M" | "F";

  interface PersonProperties {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {
    private name: string;
    private gender: string;
    private birthDate: Date;

    constructor({ name, gender, birthDate }: PersonProperties) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  interface UserProperties {
    gender: Gender;
    name: string;
    birthDate: Date;
    email: string;
    role: string;
  }

  class User extends Person {
    private email: string;
    private role: string;
    private lastAccess: Date;

    constructor({
      gender,
      name,
      birthDate,
      email,
      role,
    }: UserProperties) {
      super({ birthDate, gender, name });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProperties {
    gender: Gender;
    name: string;
    birthDate: Date;
    email: string;
    role: string;
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    private lastOpenFolder: string;
    private workingDirectory: string;

    constructor({
      gender,
      name,
      birthDate,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProperties) {
      super({ birthDate, email, gender, name, role });
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const userSettings = new UserSettings({
    lastOpenFolder: "user/home",
    workingDirectory: "home",
    email: "johndoe@gmail.com",
    role: "user",
    name: "John",
    gender: "M",
    birthDate: new Date("2000-10-10"),
  });
})();
