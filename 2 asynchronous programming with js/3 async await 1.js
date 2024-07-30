// 1  using promise  

// const axios = require('axios')

// const connectToURL = (url)=>{
//   const req = axios.get(url);
//   req.then(resp =>{
//     let listOfEntries = resp.data.entries;
//     listOfEntries.forEach((entry)=>{
//       console.log(entry.Category);
//     });
//   })
//   .catch(err =>{
//     console.log(err.toString());
//   });
// }

// console.log('Before connect URL');
// connectToURL("https://api.publicapis.org/entries");
// console.log('After connect URL')


//2 with async await

const axios = require('axios')  //to use aios need to install : npm install axios

const connectToURL = async (url) =>{
  try{
    const response = await axios.get(url);
    const listOfEntries = response.data.entries;
    listOfEntries.forEach((entry)=>{
      console.log(entry.Category);
    });
  }catch(error){
    console.error(error.toString());
  }
}

console.log('before connect URL')
connectToURL('https://api.publicapi.org/entries');
console.log('after connect url')

