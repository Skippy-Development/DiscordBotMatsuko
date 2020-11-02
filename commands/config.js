exports.run = (bot, msg, args) => {
    const discord = require("discord.js")
    const sqlite = require("sqlite3").verbose()
    const db = new sqlite.Database("./db/config.db")

    if(args[0] == "help") {
        let embed = new discord.RichEmbed()
        .setDescription(`**Config Help**`)
        .addField(`__**Welcome Message**__`, `Set the welcome msg that the bot will send when someone joins set this with WMSG`)
        .addField(`__**Leave Message**__`, "Set the msg the bot will send when a user leaves set this with LMSG")
        .addField(`__**Role**__`, "**(NOTE this is not a setting but is required so the bot can make all the needed roles)** acrtive this is with role")
        .addField(`__**Prefix**__`, "Set the bots prefix (defualt is ?) set this with prefix")
        .addField(`__**Logs**__`, "Yes or no to if everything is logged or if just moderation actions are logged! set this with log")
        .setFooter("To set a setting do *?config set [setting name] [changes]")

        msg.channel.send(embed)
    }

    if(args[0] == "set") {
        if(args[1] == "WMSG") {

            let reason = args.slice(2).join(" ");

            let id = 1;
db.run(`CREATE TABLE IF NOT EXISTS wmsg(msg text)`);


db.run(`DELETE FROM wmsg WHERE rowid=?`, id, function(err) {
    if (err) {
      return console.error(err.message);
    }

db.run(`INSERT INTO wmsg(msg) VALUES(?)`, (reason), function(err) {
        if (err) {
          return console.log(err.message);
        }
    
    })
});
        };
};

}
exports.help = {
    name: "config"
}
