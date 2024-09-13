let count = 0;

function sayHi() {
  console.log("Hi!");
  count += 1;

  if (count === 5) {  // Stop after 5 times
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(sayHi, 1000);  // Run sayHi every second
