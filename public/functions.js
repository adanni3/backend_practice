// const check = function(){
//     console.log('Doing work here')
// }

// module.exports = check


const weatherForm = document.querySelector(".form");
console.log(weatherForm);
const search = document.querySelector(".input");
console.log(search);
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  const url= "http://localhost:3000/weather?address=" + location
  console.log(url)
  fetch(url).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data.location);
          console.log(data.forecast);
        }
      });
    }
  );
});