exports.run = (bot, msg, args) => {

    const discord = require("discord.js")
    

    let issue = args.join(" ")

    let embed = new discord.RichEmbed()
    .setDescription("Issue Report")
    .setColor(0x7ec0ee)
    .addField("Reported By", msg.author, true)
    .addField("Issue", issue, true)
    .setFooter(`Issue Report Created At: ${msg.createdAt}`)

    let channels = msg.guild.channels.find(c => c.name === "issues")
    if(!channels) return msg.channel.send("No issue channel has been made!")
    channels.send(embed)



}
exports.help = {
    name: "issue"
}