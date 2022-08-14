const axios = require("axios").default;

module.exports = {
  name: "search",
  aliases: ["tv"],
  description: "Search what you want!",
  enabled: true,
  execute: async (client, message, args) => {
    const query = encodeURI(args.join(" "));
    const url = `https://api.themoviedb.org/3/search/tv?api_key=a7575750860ce28cfd1be68d1fd54890&query=${query}`;
    const response = await axios.get(url);
    const id = response.data.results[0]?.id;
    message.reply({
      embeds: [{ title: `Thiyaganin thoge labbe id eka: ${id}` }],
    });
  },
};
