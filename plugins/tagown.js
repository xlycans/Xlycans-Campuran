let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
//let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
//let name = await conn.getName(who)

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: '123', contextInfo: {
          externalAdReply: {
showAdAttribution: true,
title: "Dih, Ada Perlu Apa Lu",
body: "Kok Ngetag Ownerku?",
thumbnailUrl: "https://i.ibb.co/QjZmHNg/Gabutt-07-17.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
    throw stiker.toString()
    
}

handler.customPrefix = /^(@6281952930538)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
"https://telegra.ph/file/8974f7749676180035c21.png",
"https://telegra.ph/file/d193547d62cec53bff1e9.png",
"https://telegra.ph/file/aac11e707e742ccf1efc3.png"
]