const Discord = require('discord.js');

module.exports =  {
  fileEmbed(title, desc, image, fields) {
    const embed = new Discord.MessageEmbed()
      .setTitle(title)
      .attachFiles(['./'+image])
      .setImage('attachment://'+image)
      .setColor("#0099ff")
      .setDescription(desc)
      .setTimestamp()
      .addFields(fields);

    return embed;
  },

  plainEmbed(title, desc, fields) {
    const embed = new Discord.MessageEmbed()
      .setTitle(title)
      .setColor("#0099ff")
      .setDescription(desc)
      .setTimestamp()
      .addFields(fields);

    return embed;
  }
};

