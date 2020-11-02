exports.run = (bot, msg, args) => {

    const discord = require("discord.js")
    if (msg.author.id !== `250789544721514497`) return msg.channel.send("Only my devs can add changes, :flushed:")

    let argss = args.join(" ")

    let embed = new discord.RichEmbed()
    .setDescription(argss)
    .setColor(0x7ec0ee)

    let c = msg.guild.channels.find(c => c.name === "changes")
    if(!c) return msg.channel.send("Theres not a change channel")
    c.send(embed)
    msg.delete()

}
exports.help = {
    name: "change"
}