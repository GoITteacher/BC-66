const myPromise = delay =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });

setTimeout(() => console.log('1'), 1000);
myPromise(1000).then(res => console.log('2'));
setTimeout(() => console.log('3'), 100);
myPromise(2000).then(res => console.log('4'));
setTimeout(() => console.log('5'), 2000);
myPromise(1000).then(res => console.log('6'));
setTimeout(() => console.log('7'), 1000);
myPromise(5000).then(res => console.log('8'));
