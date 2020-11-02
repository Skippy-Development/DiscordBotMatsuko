exports.run = (bot, msg, args) => {

    const discord = require("discord.js")

    let embed = new discord.RichEmbed()
    .setDescription("Moderation commands!")
    .setColor(`RANDOM`)
    .addField("lockdown", "Lockdown a channel where no one can speak but people with the adminster role")

}
exports.help = {
    name: "help"
}