const { ChatClient } = require("dank-twitch-irc");
const { oAuth } = require('./config');

// Bot name and oAuth token
const opts = {
  username: "YOUR-NAME",
  password: oAuth,
};

// Create a new client instance and pass in options
let client = new ChatClient(opts);

module.exports = client;