
const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {

  let time = args[0]

    let embed = new Discord.RichEmbed()
    .setDescription(`Cleared ${time} messages`)
    .setColor("#e51b36")

  if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply("You dont have that permissson");
  if(!args[0]) return msg.channel.send("Invailded usage");
  msg.channel.bulkDelete(time).then(() => {
  msg.channel.send(embed).then(msg => msg.delete(2000));
});
msg.delete()

}

module.exports.help = {
  name: "clear"
}