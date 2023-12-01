class User {
  name = 'Test';
  age = 20;
  constructor(name) {
    this.name = name || name;
  }

  showInfo() {
    console.log(this.name);
  }
}

const user1 = new User('Max');
const user2 = new User('Max');
user1.showInfo();
user2.showInfo();
