exports.run = (bot, message, args, con) => {
    const discord = require("discord.js")
    

    //var con = mysql.createConnection({
        //host: "localhost",
        //user: "root",
        //password: "landonmath1",
        //database: "Matsuko"
    //});
    
    //con.connect(err => {
        //if(err) throw err;
        //console.log("Connected to DB")
    //})

    let Name = args[0];
    let invite = args[1]
    let link = args[2]
let reason = args.slice(3).join(" ")

    let embed = new discord.RichEmbed()
    .setDescription(`Bot application for ${name} by ${message.author.tag}`)
    .setColor("#0000000")
    .addField("Name", name, true)
    .addField("Invite Link", invite, true)
    .addField("Info Link", link, true)
    .addField("Reason", reason, true)

}
exports.help = {
    name: "apply"
}