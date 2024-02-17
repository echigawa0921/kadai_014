const calcFunc = (x) => {
  let result = x ** 2;
  console.log(result);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let getNumber = getRandomInt(10);
console.log("Choose Number is :", getNumber);
calcFunc(getNumber);
