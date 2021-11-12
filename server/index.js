require('dotenv').config()

const express = require('express')
const app = express()
const port = 3001
var unirest = require("unirest")
var cors = require('cors')

app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })


app.get('/api', (incomingRequest, outgoingResponse) => {
    console.log(incomingRequest.query)
	// res.send('hello')
	// res.sendFile(path.join(__dirname, '../client/public', 'index.html'));

  var rapidApiRequest = unirest("GET", "https://v1-sneakers.p.rapidapi.com/v1/sneakers");
	let filters = {
		"limit": "100"
	}
	if (incomingRequest.query.brand !== undefined) {
	 filters.brand = incomingRequest.query.brand;
	}
	if (incomingRequest.query.limit !== undefined) {
		filters.limit = incomingRequest.query.limit;
	   }
	if (incomingRequest.query.gender !== undefined) {
	filters.gender = incomingRequest.query.gender;
	   }
	if (incomingRequest.query.colorway!== undefined) {
		filters.colorway = incomingRequest.query.colorway;
	   }
		rapidApiRequest.query(filters);

	rapidApiRequest.headers({
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": process.env.RAPID_API_KEY,
		"useQueryString": true,
		"Access-Control-Allow-Origin": "http://localhost:3000/",
		"Access-Control-Allow-Credentials": true
	});

	rapidApiRequest.end(function (rapidApiResponse) {
		if (rapidApiResponse.error) throw new Error(rapidApiResponse.error);

		// console.log(rapidApiResponse.body);

		outgoingResponse.send(rapidApiResponse.body)
	});

});

app.get("/api/:id", (incomingRequest, outgoingResponse) => { 
	var rapidApiRequest = unirest("GET", `https://v1-sneakers.p.rapidapi.com/v1/sneakers/${incomingRequest.params.id}`);
	rapidApiRequest.headers({
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": process.env.RAPID_API_KEY,
		"useQueryString": true,
		"Access-Control-Allow-Origin": "http://localhost:3000/",
		"Access-Control-Allow-Credentials": true
	});

	rapidApiRequest.end(function (rapidApiResponse) {
		if (rapidApiResponse.error) throw new Error(rapidApiResponse.error);

		console.log(rapidApiResponse.body);

		outgoingResponse.send(rapidApiResponse.body)
	});
	
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});





