// Get that dank twitch irc
const client = require('./client');
const onMessageHandler = require('./utils/commands');
const onEventHandler = require('./utils/events');
const { channel } = require('./config');

// Let us know when things are up and running
client.on("ready", () => console.log("Successfully connected to chat"));
client.on("close", (error) => {
  if (error != null) {
    console.error("Client closed due to error", error);
  }
});

// Connect to the channel
client.connect();
client.join(channel);

// Catch incoming user messages and listen for commands.
client.on("PRIVMSG", onMessageHandler);

// Watch for incoming Raids. To Do: Watch for Subs/Gift-Subs etc. & Break into seperate handlers.
client.on('USERNOTICE', onEventHandler);