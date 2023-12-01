export const x1 = 1;
export const y1 = 2;
export const t1 = 3;

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfo() {
    console.log(this.name);
    console.log(this.age);
  }

  sayWoof() {
    console.log('woof woof');
  }
}
