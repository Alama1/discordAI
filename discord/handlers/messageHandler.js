class MessageHandler {

    constructor(discord) {
        this.discord = discord
    }

    async onMessage(message) {
        if (Math.random() > this.discord.app.config.properties.discord.reactionChance) {
            this.reactToMessage(message)
        }
        //Sonic response
        if (message.content.toLowerCase().trim() == 'да') {
            if (Math.random() > 0.7) {
                message.reply('https://tenor.com/view/gifkusta-gif-24281133')
            }
        }

        if (message.content.toLowerCase().trim() == 'нет') {
            if (Math.random() > 0.7) {
                message.reply('https://media.discordapp.net/attachments/867441545341698088/1103722324152287303/gifgit.gif?ex=662d2a04&is=662bd884&hm=6b327cff63db14d7ebc7534b983886edecd3ec0873e123be8921ca99395b551b&')
            }
        }

        if (Math.random() > 0.60) {
            const gifPool = ['https://tenor.com/view/black-swan-hsr-black-swan-hsr-gif-10974457427521101289', 'https://media.discordapp.net/attachments/398082454532915201/1223264248122310757/Clipchamp.gif?ex=662cff1b&is=662bad9b&hm=9c39258cafa537f44ec5685ffce59290c51597e86578ef7ba825ecf77beb1eed&'
                ,'https://tenor.com/view/in-his-words-have-letters-gif-25647210','https://tenor.com/view/nerd-cube-nerdcube-gif-25277654','https://tenor.com/view/monke-gif-25022758',
                'https://tenor.com/view/poh-gif-12986555242870216710']

            const item = gifPool[Math.floor(Math.random()*gifPool.length)];

            message.reply(item)
        }
    
    }

    reactToMessage(message) {
        const emojisnop = this.discord.app.config.properties.emojisToUse;
        let emojirandom
        if (message) {
            emojirandom = emojisnop[Math.floor(Math.random() * emojisnop.length)]
            console.log(emojirandom)
            message.react(emojirandom)
        }
    }
}
module.exports = MessageHandler
