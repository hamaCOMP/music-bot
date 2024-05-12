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
  name: "support",
  description: "Get support server link",
  permissions: "0x0000000000000800",
  options: [],
  run: async (client, interaction) => {
    try {

      const supportServerLink = "[discord](https://discord.gg/r5VwQ9zUk5)";
      const githubLink = "[github](https://github.com/its-manish-bro)";
      const insta = "[insta](https://www.instagram.com/its_manish_boyy/?hl=en)";
      const youtubeLink = "[youtube](https://www.youtube.com/@manish_boyy)";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://cdn.discordapp.com/attachments/1230824451990622299/1230824519220985896/6280-2.gif?ex=6638ae28&is=66375ca8&hm=13e4a1b91a95b2934a39de1876e66c11711c7b30ac1a91c2a158f2f2ed1c2fc6&', 
              url: 'https://discord.gg/r5VwQ9zUk5'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- insta - ${insta}\n- YouTube - ${youtubeLink}`)
            .setImage('https://cdn.discordapp.com/attachments/1237409172375605249/1239323602214457414/standard.gif?ex=6642818c&is=6641300c&hm=d023947d338080f07caa8d54ce7758da30b4b021f9c43ef8ef6b2dc29deefce7&')
            .setTimestamp();

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