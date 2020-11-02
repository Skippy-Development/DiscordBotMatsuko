exports.run = (bot, msg, args) => {

    const discord = require("discord.js")
    if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.reply("You dont have that role.");

    let hh = args.join(" ")

    let emb = new discord.RichEmbed()
    .setDescription(hh)
    .setColor(0x7ec0ee)

    msg.channel.send(emb)

}
exports.help = {
    name: "say"
}