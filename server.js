const path = require('path')
const express = require('express')
const app = express()
const hbs = require('hbs')

// app.get('', (req, res) => {
//     res.send('Hello express!')
// });

// app.get("/weather", (req, res) => {
//   res.send("Your weather");
// });

// app.get("", (req, res) => {
//   // Provide HTML to render in the browser
//   res.send("<h3>Weather</h3>");
// });
// app.get("/weather", (req, res) => {
//   // Provide an object to send as JSON
//   res.send({
//     forecast: "It is snowing",
//     location: "Philadelphia",
//   });
// });

const publicDirectoryPath = path.join("NODET", "../public");
app.use(express.static(publicDirectoryPath));
app.get("/weather", (req, res) => {
    console.log("me me em")
    const address = req.query.address
  res.send({
    forecast: "It is snowing",
    location: address
  });
});

//using fetch
// const weatherForm = document.querySelector("form");
// const search = document.querySelector("input");
// weatherForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const location = search.value;
//   fetch("http://localhost:3000/weather?address=" + location).then(
//     (response) => {
//       response.json().then((data) => {
//         if (data.error) {
//           console.log(data.error);
//         } else {
//           console.log(data.location);
//           console.log(data.forecast);
//         }
//       });
//     }
//   );
// });

// uing hbs
app.set('view engine', 'hbs')
const viewsPath = path.join("NODET", '../public/views')
app.set('views', viewsPath)
const partialsPath = path.join("NODET", '../public/partials')
hbs.registerPartials(partialsPath)
app.use(express.static(path.join(__dirname, 'public')));

app.get('', (req, res) => {
    const {title , name} = req.query
    res.render('index', {
    title: title,
    name: name
    })
})

// http request for this http://localhost:3000?title=scholar&name=namedplayer



// app.get('*', (req, res) => {
//     res.render('404', {
//     title: '404',
//     name: 'Andrew Mead',
//     errorMessage: 'Page not found.'
//     })
// })


const port = process.env.PORT || 3000
app.listen(port, () => {
 console.log('Server is up on port ' + port)
})
