const { readFileSync } = require('fs')

let handler = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} creator`
    if (!ar1.includes(text)) return m.reply(`'${text}' tidak ditemukan!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    let reel = readFileSync('./plugins/' + text + '.js', 'utf-8')
    let thumb = 'https://telegra.ph/file/e7e06f759a0549bff9a64.jpg'
    conn.sendMessage(m.chat, {
text: reel,
contextInfo: {
externalAdReply: {
title: namebot,
body: wm,
thumbnailUrl: thumb,
sourceUrl: sig,
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['getplugin'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(getplugin|gp)$/i

handler.owner = true

module.exports = handler