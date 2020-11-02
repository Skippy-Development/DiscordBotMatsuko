exports.run = (bot, message, args) => {
    const discord = require("discord.js")

    let  text = args.join(" ").split(" | ");
    let reason = args.join(" ")
    if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.reply("You dont have that role.");



    let e = new discord.RichEmbed()
    .setDescription(reason)


    message.channel.send(e)

} 
exports.help = {
    name: "embed"
}