const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
          file:"https://kafeinsiz.com/wp-content/uploads/2014/11/greyjoy.gif",
          color: 0xD97634,
      description: "**Battle Eye Tarafından öldürüldün yaşasın zulü.**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['öldür'],
  permLevel: 0
};

exports.help = {
  name: 'öldür',
  description: 'Etiketlediğiniz kişiyi öldürürsünüz.',
  usage: 'öldür'
};