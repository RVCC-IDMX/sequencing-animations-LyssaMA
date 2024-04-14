/* 
const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
}

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// const animation1 = alice1.animate(aliceTumbling, aliceTiming);
// console.log(animation1);
*/

/*
//callback hell
const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

function startAnimation1(callback) {
  const animation1 = alice1.animate(aliceTumbling, aliceTiming);
  animation1.onfinish = callback;
}

function startAnimation2(callback) {
  const animation2 = alice2.animate(aliceTumbling, aliceTiming);
  animation2.onfinish = callback;
}

function startAnimation3(callback) {
  const animation3 = alice3.animate(aliceTumbling, aliceTiming);
  animation3.onfinish = callback;
}

startAnimation1(() => {
  startAnimation2(() => {
    startAnimation3(() => {
      console.log("All animations complete");
    });
  });
});
*/


// promise chain
const aliceTumbling = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

function startAnimation1() {
  return new Promise((resolve) => {
    const animation1 = alice1.animate(aliceTumbling, aliceTiming);
    animation1.onfinish = resolve;
  });
}

const startAnimation2 = () => {
  return new Promise((resolve) => {
    const animation2 = alice2.animate(aliceTumbling, aliceTiming);
    animation2.onfinish = resolve;
  });
};

const startAnimation3 = () => {
  return new Promise((resolve) => {
    const animation3 = alice3.animate(aliceTumbling, aliceTiming);
    animation3.onfinish = resolve;
  });
};

startAnimation1()
  .then(() => startAnimation2())
  .then(() => startAnimation3())
  .then(() => {
    console.log("All animations complete");
  });
