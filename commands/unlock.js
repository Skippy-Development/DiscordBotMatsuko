exports.run = (bot, msg, args) => {
    const discord = require("discord.js")

   const role = msg.guild.roles.find(r => r.name === "@everyone")
   if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply("You dont have that role.");


    let e = new discord.RichEmbed()
    .setDescription("The channel is now unlocked!")
    .setColor("#e51b36")

    msg.channel.send(e)

   
    msg.channel.overwritePermissions(role, {
        SEND_MESSAGES: true
      })

     
}
exports.help = {
    name: "unlock"
}

