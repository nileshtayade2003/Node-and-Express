let promise1 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('promise 1 resolved')
  }, 6000);
})

let promise2 = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve('promise 2 resolved')
  }, 3000);
})


//runs promise 2 after call back 1 completed
promise1.then((message)=>{
  console.log(message)
  promise2.then((message)=>{
    console.log(message)
  })
})

// promise 1 resolved  
// promise 2 resolved