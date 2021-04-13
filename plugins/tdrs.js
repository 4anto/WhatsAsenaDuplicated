/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('_asena');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'tdrs ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
            await message.client.sendMessage(
                message.jid,'_*Murottal Alqur'an 20 juz tanpa harus download, tinggal play saja. Bisa play walaupun HP ditutup. semoga bermanfaat*_\n*DAFTAR JUZ:*\n*🎬 JUZ 1 :* http://j.mp/2b8SiNO\n*🎬 JUZ 2 :* http://j.mp/2b8RJmQ\n*🎬 JUZ 3 :* http://j.mp/2bFSrtF\n*🎬 JUZ 4 :* http://j.mp/2b8SXi3\n*🎬 JUZ 5 :* http://j.mp/2b8RZm3\n*🎬 JUZ 6 :* http://j.mp/28MBohs\n*🎬 JUZ 7 :* http://j.mp/2bFRIZC\n*🎬 JUZ 8 :* http://j.mp/2bufF7o\n*🎬 JUZ 9 :* http://j.mp/2byr1bu\n*🎬 JUZ 10 :* http://j.mp/2bHfyUH\n*🎬 JUZ 11 :* http://j.mp/2bHf80y\n*🎬 JUZ 12 :* http://j.mp/2bWnTby\n*🎬 JUZ 13 :* http://j.mp/2bFTiKQ\n*🎬 JUZ 14 :* http://j.mp/2b8SUTA\n*🎬 JUZ 15 :* http://j.mp/2bFRQIM\n*🎬 JUZ 16 :* http://j.mp/2b8SegG\n*🎬 JUZ 17 :* http://j.mp/2brHsFz\n*🎬 JUZ 18 :* http://j.mp/2b8SCfc\n*🎬 JUZ 19 :* http://j.mp/2bFSq95\n*🎬 JUZ 20 :* http://j.mp/2brI1zc\n\n' + CMD_HELP, MessageType.text         
    }));

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'tdrs ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
            await message.client.sendMessage(
                message.jid,'_*Murottal Alqur'an 20 juz tanpa harus download, tinggal play saja. Bisa play walaupun HP ditutup. semoga bermanfaat*_\n*DAFTAR JUZ:*\n*🎬 JUZ 1 :* http://j.mp/2b8SiNO\n*🎬 JUZ 2 :* http://j.mp/2b8RJmQ\n*🎬 JUZ 3 :* http://j.mp/2bFSrtF\n*🎬 JUZ 4 :* http://j.mp/2b8SXi3\n*🎬 JUZ 5 :* http://j.mp/2b8RZm3\n*🎬 JUZ 6 :* http://j.mp/28MBohs\n*🎬 JUZ 7 :* http://j.mp/2bFRIZC\n*🎬 JUZ 8 :* http://j.mp/2bufF7o\n*🎬 JUZ 9 :* http://j.mp/2byr1bu\n*🎬 JUZ 10 :* http://j.mp/2bHfyUH\n*🎬 JUZ 11 :* http://j.mp/2bHf80y\n*🎬 JUZ 12 :* http://j.mp/2bWnTby\n*🎬 JUZ 13 :* http://j.mp/2bFTiKQ\n*🎬 JUZ 14 :* http://j.mp/2b8SUTA\n*🎬 JUZ 15 :* http://j.mp/2bFRQIM\n*🎬 JUZ 16 :* http://j.mp/2b8SegG\n*🎬 JUZ 17 :* http://j.mp/2brHsFz\n*🎬 JUZ 18 :* http://j.mp/2b8SCfc\n*🎬 JUZ 19 :* http://j.mp/2bFSq95\n*🎬 JUZ 20 :* http://j.mp/2brI1zc\n\n' + CMD_HELP, MessageType.text
            }
        }
    }));
}
