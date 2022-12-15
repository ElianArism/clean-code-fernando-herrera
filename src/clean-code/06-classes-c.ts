(() => {
  type Gender = "M" | "F";

  interface PersonProperties {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  // Aplicando SRP
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
    email: string;
    role: string;
  }

  // Aplicando SRP
  class User {
    private email: string;
    private role: string;
    private lastAccess: Date;

    constructor({ email, role }: UserProperties) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProperties {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  // Aplicando SRP
  class Settings {
    private lastOpenFolder: string;
    private workingDirectory: string;

    constructor({
      lastOpenFolder,
      workingDirectory,
    }: SettingsProperties) {
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
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

  // Aplicando composicion
  class UserSettings {
    private person: Person;
    private user: User;
    private settings: Settings;

    constructor({
      gender,
      name,
      birthDate,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProperties) {
      this.person = new Person({ birthDate, gender, name });
      this.user = new User({ email, role });
      this.settings = new Settings({
        lastOpenFolder,
        workingDirectory,
      });
    }
  }

  // No cambia la implementacion
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
