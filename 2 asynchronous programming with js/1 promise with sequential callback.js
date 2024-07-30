let promise1 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("promise 1 resolved");
  }, 6000);
})

let promise2 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 3000);
})


promise1.then((message)=>{
  console.log(message);
})

promise2.then((message)=>{
  console.log(message);
})

 
// promise 2 resolved  - outpus at 3 sec
// promise 1 resolved  - outputs at 6th sec