const Discord = require('discord.js');
const Canvas = require('canvas');

module.exports = {
    name: 'votekick',
    description: 'votekick meme but it wont actually kick because its easy to abuse...',
    execute(bot,msg,args,guildConf){
        async function asyncvotekick() {
        var yes;
		//if (msg.member.hasPermission('KICK_MEMBERS')){
			let victim = msg.mentions.users.first();
			if (!victim){
				return msg.reply("specify a target");
			}
            const vkImage = Canvas.createCanvas(404, 74);
                    const ctx = vkImage.getContext('2d');
                    const background = await Canvas.loadImage(`images/examples/votekickexample.png`)
                    ctx.drawImage(background, 0, 0, vkImage.width, vkImage.height)
                    ctx.font = '18px sans-serif';
                    // Select the style that will be used to fill the text in
                    ctx.fillStyle = '#ffffff';
                    // Actually fill the text with a solid color
                    ctx.fillText(victim.tag, vkImage.width / 11, vkImage.height / 2.7);
                    const finalimage = new Discord.MessageAttachment(vkImage.toBuffer(), `VoteKick.png`);
                    sendimage = await msg.channel.send(finalimage);
                    sendimage.react('✅').then(() => sendimage.react('❌'));					
                          
		//}    
    }asyncvotekick()},
};