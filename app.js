

// console.log('Starting')
// // Wait 2 seconds before running the function
// setTimeout(() => {
//  console.log('2 Second Timer')
// }, 2000)
// console.log('Stopping')


// using axios for HTTP request
// const axios = require('axios');

// const url = 'https://jsonplaceholder.typicode.com/todos/1';

// axios.get(url)
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error('unable to receive request');
//   });


// async
// const geocode = (address, callback) => {
//     setTimeout(() => {
//     const data = {
//     latitude: 0,
//     longitude: 0
//     }
//     callback(data)
//     }, 2000)
//    }
//    geocode('Philadelphia', (data) => {
//     console.log(data)
//    })


// property shorthand
const names = 'Andrew'
const userAge = 27
const user = {
 names,
 age: userAge,
 location: 'Philadelphia'
}
console.log(user)

// destructuring in functions
const product = {
    label: 'The sulling',
    price: 30,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
   }
   const transaction = (type, { label, stock=0 }) => {
    console.log(type, label, stock)
   }
   transaction('method', product)
   