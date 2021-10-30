const client = require("../client");
const { channel } = require("../config");

const logger = (msg) => {
  console.log(msg.eventParams);
};

// Respond to various events emmited in the stream!
const onEventHandler = (msg) => {

  // Shoutout raiding streamers and welcome in the viewers
  if (msg.isRaid()) {
    client.say(channel, `!so ${msg.displayName}`);
    client.say(channel, `catJAM PogChamp Welcome in to all you Raiders!!! PogChamp catJAM`);
    logger(msg);

  // Thank the subbers!
  } else if (msg.isSub() || msg.isResub()) {
    client.say(channel, `VirtualHug Thank you for subbing ${msg.displayName}!! PogChamp Your support is greatly appreciated VirtualHug`);
    client.say(channel, `!so ${msg.displayName}`);
    logger(msg);

  } else if (msg.isSubgift()) {
    client.say(channel, `PogChamp ${msg.displayName} is gifting subbies!!! VirtualHug`);
    logger(msg);

  } else {
    logger(msg);
    return;
  };
  
}

module.exports = onEventHandler;