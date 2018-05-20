const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	//Edit after game so u can add wut game bot is playing between "" xd
	   client.user.setPresence({game: {name: "with Sel | a!help", type: 0}});
});
var welcomessage = "0"
var prefix = "a!"
var lastvideoxd = "https://www.youtube.com/watch?v=EpUMsBeDy1g"


client.on('guildMemberAdd', member => {
    member.guild.channels.get('366830234726694913').send('Hello! **' + member.user.username + '**, Welcome To RoaringArcanine I hope that you will enjoy your stay here and have fun! \nPlease make sure to read the rules'); 
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
	
		 message.channel.send(message.author.toString() + `, need some help? :thinking: \n **-a!channel**\n **-a!lastvideo**\n **-a!randomvideo**\n **-a!invite**\n **-a!server**\n **-a!ping**`);
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
  .setAuthor("Selobgo", "https://cdn.discordapp.com/avatars/178135668755660800/983c6252aabb009d8b7507e8f1e14185.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xFFA500)
  
  .setThumbnail("https://cdn.discordapp.com/attachments/361503144615870464/365396318459396098/LYLw4kBe.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL(lastvideoxd)
  

  message.channel.send({embed});
		
		 
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'server')) {
	var selectVideo = randomVideo[Math.floor(Math.random() * randomVideo.length)];
		const embed = new Discord.RichEmbed()
  .setTitle("> Click to join the server <")
  .setAuthor("Selobgo", "https://cdn.discordapp.com/avatars/178135668755660800/983c6252aabb009d8b7507e8f1e14185.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xFFA500)
  
  .setThumbnail("https://cdn.discordapp.com/attachments/361503144615870464/365396318459396098/LYLw4kBe.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discord.gg/uTx7fjR")
  

  message.channel.send({embed});
		
		 
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'invite')) {
	var selectVideo = randomVideo[Math.floor(Math.random() * randomVideo.length)];
		const embed = new Discord.RichEmbed()
  .setTitle("> Click to invite me to your server <")
  .setAuthor("Selobgo", "https://cdn.discordapp.com/avatars/178135668755660800/983c6252aabb009d8b7507e8f1e14185.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0xFFA500)
  
  .setThumbnail("https://cdn.discordapp.com/attachments/361503144615870464/365396318459396098/LYLw4kBe.jpg")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://discordapp.com/oauth2/authorize?client_id=399337992994553857&scope=bot&permissions=1")
  

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

