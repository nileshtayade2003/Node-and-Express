//like we can do same using nested callback we can do in the asyc await also

//using promise
// const axios = require('axios');

// async function connectToURL(url) {
//     try {
//         const response = await axios.get(url);
//         const listOfEntries = response.data.entries;
//         let categories = new Set();
        
//         // Extract unique categories
//         listOfEntries.forEach((entry) => {
//             categories.add(entry.Category);
//         });

//         // Request details for each category starting with 'A'
//         for (let category of categories) {
//             if (category.startsWith("A")) {
//                 const resp = await axios.get(`https://api.publicapis.org/entries?Category=${category}`);
//                 console.log(`${category} - ${resp.data.count}`);
//             }
//         }
//     } catch (error) {
//         console.error(error.toString());
//     }
// }

// connectToURL('https://api.publicapis.org/entries');


//2 using async await

const axios = require('axios');
/*
In the following code we try to get list of all entries from remote url and then based on that make request about each of the 
category starting with 'A'. Finally print the API counts of the category. We are using axios get, which returns a promise. 
*/
async function connectToURL(url){
    const resp = await axios.get(url);
    let listOfEntries = resp.data.entries;
    let Categories = listOfEntries.map((entry)=>{
          return entry.Category
    });
    Categories = [...new Set(Categories)];

    Categories.forEach(async (Category)=>{
      if (Category.startsWith("A")) {
              try {
                const resp = await axios({
                  method: 'get',
                  url: "https://api.publicapis.org/entries?Category="+Category,
                  responseType: 'json'
                })
                console.log(Category+"   "+resp.data.count);
              } 
              catch(e) {
                console.log(e);
              }
      }

    });
}
connectToURL('https://api.publicapis.org/entries').catch(err => {
    console.log(err.toString())
});