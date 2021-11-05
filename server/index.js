const express = require('express')
const app = express()
const port = 3001
var unirest = require("unirest")

app.get('/api', (incomingRequest, outgoingResponse) => {

	// res.send('hello')
	// res.sendFile(path.join(__dirname, '../client/public', 'index.html'));

  var rapidApiRequest = unirest("GET", "https://v1-sneakers.p.rapidapi.com/v1/sneakers");

	rapidApiRequest.query({
		"limit": "100"
	});

	rapidApiRequest.headers({
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": "cc28a70d1fmsh58b52975bb244efp15796bjsnaee22e422c9f",
		"useQueryString": true
	});

	rapidApiRequest.end(function (rapidApiResponse) {
		if (rapidApiResponse.error) throw new Error(rapidApiResponse.error);

		console.log(rapidApiResponse.body);

		outgoingResponse.send(rapidApiResponse.body)
	});

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



