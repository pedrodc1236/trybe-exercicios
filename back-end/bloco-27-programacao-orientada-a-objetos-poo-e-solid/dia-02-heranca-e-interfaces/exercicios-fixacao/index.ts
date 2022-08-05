// Para fixar 01 e 02

class Superclass {
  public isSuper: boolean

  constructor() {
    this.isSuper = true;
   }

  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false
  }
}

const myFunc = (object: Superclass) => {
  object.sayHello();
  console.log(object.isSuper ? 'Super!' : 'Sub!');
}

const objSuperclass = new Superclass();
const objSubclass = new Subclass();

myFunc(objSuperclass);
myFunc(objSubclass);

// Para fixar 03

interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string; 
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    return `A soma de ${this.myNumber} + ${myParam} é ${myParam + this.myNumber}.`
  }
}

const objMyClass = new MyClass(3);
console.log(objMyClass.myNumber);
console.log(objMyClass.myFunc(5));

// Para fixar 04

interface Logger {
  log(param: string): void;
}

class ConsoleLogger implements Logger {
  constructor() { }

  log(param: string): void {
      console.log(`Logger1: ${param}`)
  }
}

class ConsoleLogger2 implements Logger {
  constructor() { }

  log(param: string): void {
    console.log(`Logger2: ${param}`)
  }
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) { }

  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const databaseE1 = new ExampleDatabase(logger1);
const databaseE2 = new ExampleDatabase(logger2);
const databaseE3 = new ExampleDatabase();

databaseE1.save('chave 1', 'valor 1');
databaseE2.save('chave 2', 'valor 2');
databaseE3.save('chave 3', 'valor 3');