// const obj = { name: 'test' };
// localStorage.setItem('login', JSON.stringify(obj));

// try {
//   const userValue = JSON.parse(localStorage.getItem('login'));
//   console.log(userValue);
// } catch {
//   console.log('Error');
// }

// localStorage.clear();
// localStorage.removeItem('login');

// ============================

const user = {
  name: 'Anonymus',
  message: 'sefsefef',
};

saveToLS('user', user);

console.log(localStorage.getItem('user'));

function saveToLS(key, value) {
  const jsonValue = JSON.stringify(value);
  localStorage.setItem(key, jsonValue);
}

function loadFromLS(key) {
  const jsonValue = localStorage.getItem(key);
  try {
    const value = JSON.parse(jsonValue);
    return value;
  } catch {
    return jsonValue;
  }
}

const str = "{'awd': 'awdawd'}";
