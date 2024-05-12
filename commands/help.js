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

const { EmbedBuilder } = require('discord.js');


module.exports = {
  name: "help",
  description: "Get information about the bot",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {
     

      const embed = new EmbedBuilder()
         .setColor('#0099ff')
      .setTitle(':robot: CWM Music Bot')
      .setDescription('Welcome to the Music Bot!\n\n- Here are the available commands:\n\n' +
        '**/play :** Start playing the songs.\n' +
        '**/ping :** check bot latency.\n' +
        '**/support :** Display support server info');

      return interaction.reply({ embeds: [embed] });
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
