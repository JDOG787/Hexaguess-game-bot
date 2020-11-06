const { plainEmbed } = require("../embed");

module.exports = {
	name: 'help',
	execute(msg) {
    let fields = [
      {
        name: "Start a game",
        value: "\`\`\`h#play\`\`\`",
        inline: true
      },
      {
        name: "View the leaderboard",
        value: "\`\`\`h#lb\`\`\`",
        inline: true
      },
      {
        name: "Get a list of want each command does",
        value: "\`\`\`h#help\`\`\`",
        inline: true
      }
    ];

    let embed = plainEmbed("HexaGuess Bot", "Here's what i can do...", fields);
    msg.channel.send(embed)
  }    
};