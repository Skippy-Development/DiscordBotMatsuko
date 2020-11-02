const Discord = require("discord.js");
const ms = require("ms");
module.exports.run = async (bot, msg, args) => {//shared term

  let  text = args.join(" ").split(" | ");
  

  if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.reply("No can do.");
  let tomute = msg.mentions.members.first() || msg.guild.members.get(args[0]);
  if(!tomute) return msg.reply("Couldn't find user.");
  
  let reason = text[0].slice(22);
  if(!reason) return msg.reply("Please supply a reason.");

  let muterole = msg.guild.roles.find(r => r.name === "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await msg.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      msg.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
}
  }
  //end of create role
  
  if(!text[1]) return msg.reply("You didn't specify a time!");//Roles not getting added -__-


  try{
    await tomute.send(`Hi! You've been muted for ${text[1]}. Sorry!`)//its the time tho
  }catch(e){
    msg.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${text[1]}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(``)
  .setColor("#0000000")
  .addField("Muted User", tomute, true)
  .addField("Moderator", msg.author, true)
  .addField("Mute Legnth", text[1], true)
  .addField("Reason", reason, true)
  .setFooter(`Mute excuted at: ${msg.createdAt}`) //what needs help?
  .setColor("#e51b36")

  let channel = msg.guild.channels.find(c => c.name === "incidents-logs");
  if(!channel) { return msg.reply("Please create a incidents channel first!"); } else {//Embeds fixed

  await tomute.addRole(muterole)
  return await channel.send(muteembed)
  }


  setTimeout(function(){
    tomute.removeRole(muterole);
  }, ms(text[1]));



//end of module
}

module.exports.help = {
  name: "tempmute"
}