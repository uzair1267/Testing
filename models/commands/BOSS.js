const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
    name: "boss",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SHAAN KHAN",
    description: "no prefix",
    usePrefix: false,
    commandCategory: "No command marks needed",
    usages: "Yo Yo",
    cooldowns: 5,
};

const gif = "https://i.imgur.com/PQsKoPQ.jpeg";
const message = "● ======= 𝐀𝐒𝐋𝐀𝐌𝐔𝐀𝐋𝐈𝐊𝐔𝐌 𝐘𝐄 𝐇𝐀𝐈 𝐒𝐇𝐀𝐀𝐍 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 ======= ●                                                          ☟  ========== ☟ ==========  ☟.                                                         ●============================●                              𝐎𝐰𝐧𝐞𝐫 ➻  ────  𝐒𝐇𝐀𝐀𝐍 𝐊𝐇𝐀𝐍  ";

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
    var { threadID, messageID } = event;
    const lowerCaseMessage = event.body.toLowerCase();

    if (lowerCaseMessage.startsWith("shan") || 
        lowerCaseMessage.startsWith("SHAAN") || 
        lowerCaseMessage.startsWith("Shaan")) { 

        const downloadPath = path.join(__dirname, 'Boss-Jpg-Images.jpg');

        // Download image from Imgur
        request(gif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
            var msg = {
                body: message,
                attachment: fs.createReadStream(downloadPath)
            };
            api.sendMessage(msg, threadID, messageID);
            api.setMessageReaction("😘", event.messageID, (err) => {}, true);
        });
    }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
