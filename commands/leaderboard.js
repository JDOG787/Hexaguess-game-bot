const { getLeaderboard } = require("../leaderboard");
const { plainEmbed } = require("../embed");

module.exports = {
	name: 'lb',
	async execute(msg) {
    let scores = await getLeaderboard();
    let fields = [{ name: "_ _", value: "_ _"}];
    let message ="\`\`\`md\nRank\t\t\tScore\t\t\tUser\n========================================================\n";

    scores.forEach((score, i) => {
      let num = i+1;
      message += `${num}\t\t\t${score.score}\t\t\t${score.name}\n`
      if (num === scores.length) return message+=`\`\`\``
    });

    let newEmbed = plainEmbed("Leaderboard!", message, fields);
    msg.channel.send(newEmbed)
	}
};
