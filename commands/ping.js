/*
 __  __             _     _     
|  \/  | __ _ _ __ (_)___| |__  
| |\/| |/ _` | '_ \| / __| '_ \ 
| |  | | (_| | | | | \__ \ | | |
|_|  |_|\__,_|_| |_|_|___/_| |_|

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## DISCORD :  https://discord.gg/r5VwQ9zUk5                           ║
║  ## YouTube : https://www.youtube.com/@manish_boyy                     ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
const { EmbedBuilder } = require('discord.js')

module.exports = {
  name: "ping",
  description: "check the bot latency",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {


    try {

      const start = Date.now();
      interaction.reply("Pinging....").then(msg => {
        const end = Date.now();
        const embed = new EmbedBuilder()
          .setColor(`#6190ff`)
          .setTitle(`Bot Latency`)
          .setDescription(`**Pong :shushing_face: ** : ${end - start}ms`)
        return interaction.editReply({ embeds: [embed] }).catch(e => { });
      }).catch(err => { })

    } catch (e) {
    console.error(e); 
  }
  },
};
/*
 __  __             _     _     
|  \/  | __ _ _ __ (_)___| |__  
| |\/| |/ _` | '_ \| / __| '_ \ 
| |  | | (_| | | | | \__ \ | | |
|_|  |_|\__,_|_| |_|_|___/_| |_|

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## DISCORD :  https://discord.gg/r5VwQ9zUk5                           ║
║  ## YouTube : https://www.youtube.com/@manish_boyy                     ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
