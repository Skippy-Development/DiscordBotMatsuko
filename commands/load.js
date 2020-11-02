exports.run = (bot, msg, args) => {
    
    const discord = require("discord.js") //requiring the discord.js library from ./packages/

    if(args[0] == "role") { //checking the arguement to see if the user has typed role
        msg.channel.send("Roles are being loaded")  //msg.send

       let r = msg.guild.roles.find(r => r.name == "Helper")  //Checking for the role Helper
       msg.channel.send("The Helper role has been found")
        if(!r) return msg.channel.send("No Helper role found!")

        let c = msg.guild.roles.find(r => r.name == "Moderator")
        if(!c) return;
         

        
    }

}
exports.help = {
    name: "load"
}