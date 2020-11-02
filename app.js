const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const botconfig = require("./config/botconfig.json")
const r = require("rethinkdb")
const sqlite = require("sqlite3").verbose()
const db = new sqlite.Database("./db/config.db")

const test = require ('./src/main/index.js')


test(bot, "guildMemberAdd");


//r//.connect({host: "localhost", port: 28015}, function (err, conn ) {
 // if (err) throw err;
  
  //r.db('Matsuko').table('yeet').run(conn, function(err, resi) {

    //resi.toArray(function(err, result) {
     //if (err) throw err;
  
      
    //})
  
  //})
  //})
  fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find any commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});
//**========================================== */
//**END OF EVENT HANDLER */

//**EVENT HANDLER */
//**================================================= */
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
     files.filter(file => {
         let eventFunction = require(`./events/${file}`);
            let eventName = file.split(".")[0];
             if(eventFunction.length <= 0) {
              console.log("No Events to load!")
                 return}
                  bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });
                    console.log(`[Events]\t Loaded a total amount of ${files.length} events!`);
  });
//**========================================== */
//**END OF EVENT HANDLER */

bot.on("ready", async () => { 
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    setInterval(function() {
     let respose = [`I am cool`, `I am in ${bot.guilds.size} guilds!`, `I am watchin over ${bot.users.size} users!`]
     let random = Math.floor(Math.random() * respose.length);
   
     bot.user.setActivity(respose[random], { type: "STREAMING", url: "https://www.twitch.tv/twitch"})
   
   }, 20000)
     
       }); //i start now?

bot.on("message", async msg => {

  if(msg.author.bot) return;
  if(msg.channel.type === "dm") return;


  

  let prefix = botconfig.prefix;
  if (!msg.content.startsWith(prefix)) return;
  let msgArray = msg.content.split(" ");
  let cmd = msgArray[0];
  let args = msgArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,msg,args) 
})



bot.on(`guildMemberAdd`, member => {

  let c = member.guild.channels.find(c => c.name == "general-chat")

  let sql = `SELECT DISTINCT msg FROM wmsg
           ORDER BY msg`;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      //

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
  //    console.log(row.name)
     let msgs = row.name
     if(!msgs) return;
     c.send(`${msgs} ${member}`)
    }


    );
  }); //NVMD//xD
});


  bot.login(botconfig.token)
  
 