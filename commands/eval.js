const conf = require ("../config/botconfig.json"    )
module.exports.run = async (bot, msg, args) => {
const d = require ('discord.js')
if (!conf.ids.includes(msg.author.id)) return msg.channel.send("Only my devs can see my insides, :flushed:")


//suggestion: Add an emoji for input and output also error
if (!args.join(" ")) return msg.channel.send(`Please provide some code to eval.`);

    const clean = text => {
        if (typeof(text) === "string") 
        
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
       else
            return text;
      }
      
      try {
        const code = args.join(" ");

        let evaled = eval(code);

        if(code === "bot.token") {
            msg.channel.send("So my bot token is........ n6457444154745 You have been bot banned and your name will be sent to the admins and developers")
        return;
        }
   
const embed = new d.RichEmbed()
.setTitle("Evaled")
.addField('**Input**', "\`\`\`js" + "\n" + code + "\`\`\`", true)
.addField('**Output**', "\`\`\`js" + "\n" + clean(evaled) + "\`\`\` :")
.setColor("RANDOM")
msg.channel.send({embed, code: "js"})
      }catch (err) {
        msg.channel.send({embed: { description: "__**An error -.-**__\n" + "\`\`\`" + clean(err) + "\`\`\`", color: 0xFFFFFF}});
      }



}

exports.help = {
    name: "eval",
}