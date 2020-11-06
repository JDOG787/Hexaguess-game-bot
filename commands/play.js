const { fileEmbed } = require("../embed");
const makeImage = require("../createImage");
const { addPoints } = require("../leaderboard");

module.exports = {
	name: 'play',
	async execute(msg) {
    let colors = require("../generateColors")();
    let pickedColor = `#${colors[Math.floor(Math.random() * colors.length)]}`;
    const reactions = ["🇦", "🇧", "🇨","🇩", "🇪", "🇫"];
    let fields = [];
    for (let i = 0; i < reactions.length; i++) {
      let = newField = {
        name: `${reactions[i]} \*\*#${colors[i]}\*\*`,
        value: "_ _"
      }
      fields.push(newField);
    }

    await makeImage(pickedColor);

    let newEmbed = fileEmbed("Play a game!", "React with the correct emoji to guess the color!", "color.png", fields);

    msg.channel.send(newEmbed)
    .then(embed => {
      embed.react("🇦"); 
      embed.react("🇧");     
      embed.react("🇨");     
      embed.react("🇩");    
      embed.react("🇪");      
      embed.react("🇫");  

      const filter = (reaction, user) => {
        return reactions.includes(reaction.emoji.name) && user.id === msg.author.id;
      }

      embed.awaitReactions(filter, { max: 1, time: 1200000, errors: ['time'] })
        .then(collected => {
          const reaction = collected.first();

          let index = colors.indexOf(pickedColor.replace("#", ""));
          if (reaction.emoji.name === reactions[index]) {
            msg.reply("Correct! you get 5 points!");
            addPoints(msg.member.user.tag, 5);
          } else {
            msg.reply(`Incorrect, it was \`${pickedColor}\`. You lose 3 points!`);
            addPoints(msg.member.user.tag, -3);
          }
        })
        .catch(collected => {
          msg.reply('You ran out of time...');
          addPoints(msg.member.user.tag, -3);
        });    
    })
  }    
};
