exports.run = (bot, msg, args) => {
    const discord = require("discord.js")
    let id = Math.floor(Math.random() * 10000 - 1 + 1) + 1
    let user = msg.mentions.members.first()
    if(!user) return msg.channel.send("You didnt give me a user to kick :neutral_face:")
    let reason = args.slice(2).join(" ");
    if(!msg.member.hasPermission("KICK_MEMBERS")) return message.reply("No can do.");
    
   
    

    let embed = new discord.RichEmbed()
    .setDescription(`kick  | Case ID: ${id}`)
    .addField("User", user, true)
    .addField("Moderator", msg.author.tag, true)
    .addField("Reason", reason, true)
    .setFooter(`Time of kick: ${msg.createdAt}`)
    .setColor("#e0112a")

    let c = msg.guild.channels.find(c => c.name === "incidents-logs");
    if(!c) return msg.channel.send("Please make a incidents-logs channel so I can log all of my actions!")
    c.send(embed)

    //user.kick.reason


}
exports.help = {
    name: "kick"
}