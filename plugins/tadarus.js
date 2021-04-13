/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('conventer');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'tdrs', fromMe: true, desc: Lang.XMEDİA_DESC}, (async (message, match) => {  
        await message.sendMessage(' _*Murottal Alqur'an 20 juz tanpa harus download, tinggal play saja. Bisa play walaupun HP ditutup. semoga bermanfaat*_\n*DAFTAR JUZ:*\n*🎬 JUZ 1 :* http://j.mp/2b8SiNO\n*🎬 JUZ 2 :* http://j.mp/2b8RJmQ\n*🎬 JUZ 3 :* http://j.mp/2bFSrtF\n*🎬 JUZ 4 :* http://j.mp/2b8SXi3\n*🎬 JUZ 5 :* http://j.mp/2b8RZm3\n*🎬 JUZ 6 :* http://j.mp/28MBohs\n*🎬 JUZ 7 :* http://j.mp/2bFRIZC\n*🎬 JUZ 8 :* http://j.mp/2bufF7o\n*🎬 JUZ 9 :* http://j.mp/2byr1bu\n*🎬 JUZ 10 :* http://j.mp/2bHfyUH\n*🎬 JUZ 11 :* http://j.mp/2bHf80y\n*🎬 JUZ 12 :* http://j.mp/2bWnTby\n*🎬 JUZ 13 :* http://j.mp/2bFTiKQ\n*🎬 JUZ 14 :* http://j.mp/2b8SUTA\n*🎬 JUZ 15 :* http://j.mp/2bFRQIM\n*🎬 JUZ 16 :* http://j.mp/2b8SegG\n*🎬 JUZ 17 :* http://j.mp/2brHsFz\n*🎬 JUZ 18 :* http://j.mp/2b8SCfc\n*🎬 JUZ 19 :* http://j.mp/2bFSq95\n*🎬 JUZ 20 :* http://j.mp/2brI1zc');
    });

if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'tdrs', fromMe: true, desc: Lang.XMEDİA_DESC}, (async (message, match) => {  
        await message.sendMessage(' _*Murottal Alqur'an 20 juz tanpa harus download, tinggal play saja. Bisa play walaupun HP ditutup. semoga bermanfaat*_\n*DAFTAR JUZ:*\n*🎬 JUZ 1 :* http://j.mp/2b8SiNO\n*🎬 JUZ 2 :* http://j.mp/2b8RJmQ\n*🎬 JUZ 3 :* http://j.mp/2bFSrtF\n*🎬 JUZ 4 :* http://j.mp/2b8SXi3\n*🎬 JUZ 5 :* http://j.mp/2b8RZm3\n*🎬 JUZ 6 :* http://j.mp/28MBohs\n*🎬 JUZ 7 :* http://j.mp/2bFRIZC\n*🎬 JUZ 8 :* http://j.mp/2bufF7o\n*🎬 JUZ 9 :* http://j.mp/2byr1bu\n*🎬 JUZ 10 :* http://j.mp/2bHfyUH\n*🎬 JUZ 11 :* http://j.mp/2bHf80y\n*🎬 JUZ 12 :* http://j.mp/2bWnTby\n*🎬 JUZ 13 :* http://j.mp/2bFTiKQ\n*🎬 JUZ 14 :* http://j.mp/2b8SUTA\n*🎬 JUZ 15 :* http://j.mp/2bFRQIM\n*🎬 JUZ 16 :* http://j.mp/2b8SegG\n*🎬 JUZ 17 :* http://j.mp/2brHsFz\n*🎬 JUZ 18 :* http://j.mp/2b8SCfc\n*🎬 JUZ 19 :* http://j.mp/2bFSq95\n*🎬 JUZ 20 :* http://j.mp/2brI1zc');
    });
