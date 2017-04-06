//Initial setup
const Discord = require('discord.js');
const client = new Discord.Client();
client.setMaxListeners(20);

client.on('ready', () => {
	console.log('Started');
	var availGuilds = client.guilds;
});
client.on('error', err =>{
	console.log(err);
});

var hakelvin;
var users = client.users;
for(var [key, value] of users){
	if(value.username === "ShwangCat"){
		console.log("found");
		hakelvin = value;
	}
}









//Listeners for messages
client.on('message', message => {
	var date = new Date();
	var rightnow = date.getHours() % 12 + ":" + date.getMinutes();
	console.log("Server: " + message.guild.name + "- " + message.channel.name + ": [" + rightnow + "]" + message.author.username + ": " + message.content);
});
client.on('message', message => {
	if (message.content === "You're gay") {
		message.reply("No u");
	}

	if(!message.author.bot){	
		var str = message.content.toLowerCase();
		var toSearch = "kelvin";
		var toSearch2 = "danny";
		if(isIn(str, toSearch)){
			message.reply("Ha Kelvin");
		}
	}
	if(message.author.username === "Danny"){
		message.reply("Danny you're drunk");
	}
});










//! commmands
client.on('message', message => {
	if(message.content.toLowerCase() === "!help"){
		message.channel.sendMessage("Available commands: \n !help \n !uptime \n !isKelvinStupid?");
	}


	if(message.content.toLowerCase() === "!uptime"){
		var uptimesec = Math.floor(client.uptime / 1000);
		var uptimemin = Math.floor(uptimesec / 60);
		var uptimehrs = Math.floor(uptimemin / 60);
		console.log("uptime: " + uptimesec);

		if(uptimesec < 60){
			message.reply("Bot uptime: " + uptimesec + " seconds");
		}
		else if(uptimesec >= 60 && uptimesec < 3600){
			if(uptimemin <= 1){
				message.reply("Bot uptime: " + uptimemin + " minute " + uptimesec % 60  + " seconds");
			}
			else{
				message.reply("Bot uptime: " + uptimemin + " minutes " + uptimesec % 60  + " seconds");	
			}
			
		}
		else{
			if(uptimehrs <= 1){
				message.reply("Bot uptime: " + uptimehrs + " hour " + uptimemin % 60 + " minutes " + uptimesec % 60  + " seconds");
			}
			else{
				message.reply("Bot uptime: " + uptimehrs + " hours " + uptimemin % 60 + " minutes " + uptimesec % 60  + " seconds");
			}
			
		}
		
	}


	if(message.content.toLowerCase() === "!iskelvinstupid?"){
		message.reply("Yeah he's really stupid");
	}


	if(message.content.toLowerCase() === "!botend" && message.author.username === "ShwangCat"){
		message.reply("Bot logging off");
		client.destroy();
	}


	else if(message.content.toLowerCase() === "!botend"){
		message.reply("Nah");
	}
});










//Misc
var time1;
client.on('message', message => {
	if(message.content.toLowerCase() === "!isleethedominantspoon" || message.content.toLowerCase() === "!isleethedominantspoon?"){
		message.reply("Of course!");
	}


	if(message.author.username === "Dank Memes"){
		message.reply("Shut up Kelvin");
	}
});












//Functions
function isIn(str, toSearch){
	for(var i = 0; i < str.length; i++){
		if(str.charAt(i) === toSearch.charAt(0)){
			var currInd = i;
			var otherInd = 0;

			while(str.charAt(currInd) === toSearch.charAt(otherInd)){
				if(otherInd < toSearch.length - 1 && currInd < str.length - 1){
					currInd++;
					otherInd++;
				}
				else{
					break;
				}
			}
			if(otherInd === toSearch.length - 1){
				return true;
			}
			else{
				return false;
			}

		}
	}
}











//Login
client.login('MjQ5NDA4NDc0OTgxNzI4MjU3.CxF58g.7EJJX4ZH1bmqrLJgkvN7IZC5xbU');
