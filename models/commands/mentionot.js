module.exports.config = {
  name: "mentionot",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100016828397863") {
    var aid = ["100016828397863"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Bhai Boss Ko Kyu Mention Kar Rahe Ho 🙄🙄🙄" , "𝐃𝐎𝐎𝐑 𝐑𝐀𝐇𝐎 𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐒𝐄  𝐔𝐒𝐊𝐎 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐍𝐀𝐇𝐈 𝐊𝐀𝐑𝐎😏😏😏" , "𝐔𝐅𝐅 𝐍𝐀 𝐊𝐀𝐑𝐎 𝐁𝐎𝐒𝐒 𝐊𝐎 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐌𝐔𝐉𝐇𝐄 𝐒𝐇𝐀𝐑𝐀𝐌 𝐀𝐀𝐓𝐈 𝐇𝐀𝐈🙈🙈" , "Me Jaanu Ke Sath Busy hu , Mujhe kyu bula rahe ho" , "Abe Me bot hu mujhe mention mat kar" , "Dimag Mat khao" , "Kya hua janu mujhe bulaya🙂" , "Koi kaam ni hai kya tujhe" , "Bolo na babu" , "Meri yaad arahi tumhe itni" , "Ha meri jan😙" , "Mujhe mt bulya kro🙄" , "Tera sar f0d dena me , baar mention mt kro😒" , "Ek Bar Me smjh ni ata tujhe kya meri baat ,mujhe baar bar mention krrhe ho😒😒😒😒" , "Abee jaa na 😒" , "Mujhe Bulaya😘kya" , "demagh Kharab ho jaye ga mera Amma behen pe aajonga me😁😁😁👈"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
