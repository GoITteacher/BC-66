/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

function findLogin(allLogins, login) {
  return allLogins.includes(login)
    ? `Пользователь ${login} найден.`
    : `Пользователь ${login} не найден.`;

  // =======
  /* 
  let message = '';

  if (allLogins.includes(login)) {
    message = `Пользователь ${login} найден.`;
  } else {
    message = `Пользователь ${login} не найден.`;
  }

  return message; */
}

// console.log(findLogin(logins, 'awd'));
