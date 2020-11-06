// INVITE
// https://discord.com/oauth2/authorize?client_id=771805676061982791&permissions=0&scope=bot

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "h#";
require("./keep_alive");

client.commands = new Discord.Collection();
const fs = require("fs");
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}


client.on('ready', () => {
  console.log(`${client.user.username} Starting up...`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  try {
    client.commands.get(command).execute(msg, args, client);
  } catch (e) {
    console.error(e);
    msg.reply('Thats not a valid command!');
  }
});



client.login(process.env.TOKEN);
