const express = require('express')
const app = express()
const port = 3001
var unirest = require("unirest");

var req = unirest("GET", "https://v1-sneakers.p.rapidapi.com/v1/sneakers");
	req.query({
		"limit": "100"
	});
	req.headers({
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": "cc28a70d1fmsh58b52975bb244efp15796bjsnaee22e422c9f",
		"useQueryString": true
	});

	req.end(function (res) {
		if (res.error) throw new Error(res.error);

		console.log(res.body);
	});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



