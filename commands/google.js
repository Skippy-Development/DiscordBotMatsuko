exports.run = (bot, msg, args) => {

    const discord = require("discord.js") //requiring the discord.js libary 

    let arugment = args.join("+") //Splits the args, by a + so it can search in google if seperated by a _ the link wont be able to connect fully.

//Now go see why it says undefined when a user joins ;)
    msg.channel.send('https://www.google.co.uk/search?q=' + arugment); //Sends the channel with the link 

}
exports.help = {
    name: "google"
}