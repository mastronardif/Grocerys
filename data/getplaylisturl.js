var unirest = require("unirest");
//$ nohup: ignoring input and redirecting stderr to stdout

var req = unirest("GET", "https://www.googleapis.com/youtube/v3/playlistItems");

req.query({
  "maxResults": "20",
  "playlistId": "PLaaxGO6E_rXecrc6icFvcV7JRMs_gI6OZ",
  "key": "AIzaSyAsMiGn7Z09Yh1zYyJlmPf0ak8XwZ7lFJY",
  "part": "snippet"
});

req.headers({
  "postman-token": "6b929b0c-39cc-5b64-cb49-c78bd818e1a7",
  "cache-control": "no-cache",
  "part": "snippet"
});


req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
