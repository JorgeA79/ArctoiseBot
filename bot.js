const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	//Edit after game so u can add wut game bot is playing between "" xd
	   client.user.setPresence({game: {name: "with views | !help", type: 0}});
});
var welcomessage = "0"
var prefix = "!"
var lastvideoxd = "https://www.youtube.com/watch?v=X-eFwTXPQ88"


client.on('guildMemberRemove', member => {
    member.guild.channels.get('447867771007533056').send('**' + member.user.username + '** has left Oof.'); 
});
client.on('guildMemberAdd', member => {
    member.guild.channels.get('447867771007533056').send('Welcome to The Lair **' + member.user.username + '**! You will be given your role shortly!'); 
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
	
		 message.channel.send(`Help Menu :wrench: \n **-a!channel**\n **-a!lastvideo**\n **-a!ping**\n` + message.author.toString());
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});


client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'channel')) {
	const embed = new Discord.RichEmbed()
  .setTitle("Arctoise")
  .setAuthor("Atherox", "https://cdn.discordapp.com/avatars/181472986920910850/e20d43987fdc80f039ac8465a4c5a232.jpg?size=1024")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x5CA1EE)
  .setDescription("Yo, what's up guys Jack from Arctoise here! My channel is based on Top 5's, Streams, Let's play and a whole lot more!")
  .setThumbnail("https://cdn.discordapp.com/attachments/373987435299733504/447866468433133579/IREAy5KP_1.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://www.youtube.com/channel/UC29KbqOg-Ssiwbn-9p5dj5w/about")
  

  message.channel.send({embed});
	}
});


client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'lastvideo')) {
	
		const embed = new Discord.RichEmbed()
   .setTitle("> Click for last video <")
  .setAuthor("Atherox", "https://cdn.discordapp.com/avatars/181472986920910850/e20d43987fdc80f039ac8465a4c5a232.jpg?size=1024")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
 .setColor(0x5CA1EE)
  
  .setThumbnail("https://cdn.discordapp.com/attachments/373987435299733504/447866468433133579/IREAy5KP_1.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(lastvideoxd)
  

  message.channel.send({embed});
		
		 
	}
});

client.on('message', message => {
	 let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "createHook")) {
	  
	const nameAvatar = args.join(" ");
const linkCheck = /https?:\/\/.+\.(?:png|jpg|jpeg)/gi;
if (!linkCheck.test(nameAvatar)) return message.reply("You must supply an image link.");
const avatar = nameAvatar.match(linkCheck)[0];
const name = nameAvatar.replace(linkCheck, "");
message.channel.createWebhook(name, avatar)
  .then(webhook => webhook.edit(name, avatar)
    .catch(error => console.log(error)))
  .then(wb => message.author.send(`Here is your webhook https://canary.discordapp.com/api/webhooks/${wb.id}/${wb.token}\n\nPlease keep this safe, as you could be exploited.`)
    .catch(error => console.log(error)))
  .catch(error => console.log(error));
	}
});

client.on('message', message => {
	if (message.author.bot){
	if (message.content.startsWith('https://www.youtube')) {
		lastvideoxd = (message.content)
		var lastvideo = (message.content)
	message.delete(1000);
		 message.channel.send(`@everyone WHAPAM \n ` + lastvideo);
	}}
});
//Important
client.login(process.env.BOT_TOKEN);

