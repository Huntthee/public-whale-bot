const client = require('../client');
const { channel } = require('../config');


// Handler Functions!
const onMessageHandler = (msg) => {
  // Remove whitespace from chat message
  const commandName = msg.messageText.trim();

  if (msg.isCheer()) {
    try {
      client.say(channel, `Oooooooo Shiny!!! ${msg.displayName} is dropping bitties!!! PogChamp VirtualHug`)
    } catch(err) {
      console.log(err);
    }
    console.log(msg.eventParams);
  }

  // If the command is known, let's execute it
  if (commandName === "!art") {
    client.say(
      channel,
      `Hey peeps! HeyGuys If you're in need of some digital artwork for your stream or site, check out https://www.thedesertwhale.com to browse the portfolio and see what she can do! SeemsGood`
    );

    // Shoutout for the lurkers
  } else if (commandName === "!lurkers") {
    client.say(
      channel,
      `Lurkers are what makes the world go round! Thank you for hanging around and supporting the stream! peepoPooPoo`
    );

    // Reminder to drop a follow!
  } else if (commandName === "!reminder") {
    client.say(
      channel,
      `Thank you for hanging out with us! SeemsGood If you're new here and enjoying your time, drop a follow to show your support! <3 Everyone is welcome in the pod! catJAM catJAM`
    );
  } else if (commandName === "!uded") {
    deathCounter();
    client.say(
      channel,
      `Oh no!! FeelsBadMan TheDesertWhale has died BibleThump`
    );
  } else if (commandName === "!deaths") {
    client.say(
      channel,
      `TheDesertWhale has died ${timesDied} time${notOne} this stream... ${emote}`
    );
  } else if (commandName === "!party") {
    client.say(
      channel,
      `peepoAceDJ catJAM ITS TIME TO PARTY!!!!! hypeE hypeE catJAM peepoAceDJ peepoAceDJ catJAM ITS TIME TO PARTY!!!!! hypeE hypeE catJAM peepoAceDJ`
    );
  } else {
    // console.log(context);
    return;
  }
} // --------- End Message Handler

// Death Counter!!
  let timesDied = 0;
  let notOne = "s";
  let emote = "SeemsGood";

  const deathCounter = () => {
    timesDied++;
    if (timesDied === 1) {
      notOne = "";
    } else {
      notOne = "s";
    }
    if (timesDied > 0) {
      emote = "NotLikeThis";
    };
  };

module.exports = onMessageHandler;
