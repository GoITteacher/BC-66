export class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfo() {
    console.log(this.name);
    console.log(this.age);
  }

  sleep() {
    console.log('cat sleep');
  }
}

export function sayHello(x, y) {
  return x * y;
}
