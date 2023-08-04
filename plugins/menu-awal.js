let fetch = require('node-fetch')
let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, command, text }) => {
let { limit, role, level, exp, premiumTime } = db.data.users[m.sender]
  let name = await conn.getName(m.sender)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    readmore: readMore
  let menyu = `*Halo, ${ucpn}*
 
 *${namebot}* Adalah Sebuah Bot WhatsApp Yang Di Program Untuk Membantu Pengguna WhatsApp.
  
_*Your Information*_
❏ *Name:* ${name}
❏ *Status:* ${premiumTime > 0 ? 'Premium' : 'Free user' }
❏ *Limit:* ${limit}

*BERIKUT LISTMENU BOT*
`


let rely = `➣ ${usedPrefix}allmenu
➣ ${usedPrefix}specialmenu [ Soon ]
➣ ${usedPrefix}nsfwmenu [ Soon ]

_${namebot}_
_The Best Rpg Bot_`
await conn.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
          await conn.sendMessage(m.chat, {
          react: {
            text: '3️⃣',
            key: m.key,
          }})
await conn.sendMessage(m.chat, {
          react: {
            text: '2️⃣',
            key: m.key,
          }})
await conn.sendMessage(m.chat, {
          react: {
            text: '1️⃣',
            key: m.key,
          }})
          await conn.sendMessage(m.chat, {
          react: {
            text: '☑️',
            key: m.key,
          }})
  conn.sendMessage(m.chat, {
text: menyu + readMore + '\n\n' + rely,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: namebot,
thumbnailUrl: "https://telegra.ph/file/84ace33eeee5e5190e96a.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat dini hari kak"
  if (time >= 4) {
    res = "Selamat pagi kak"
  }
  if (time >= 10) {
    res = "Selamat siang kak️"
  }
  if (time >= 15) {
    res = "Selamat sore kak"
  }
  if (time >= 18) {
    res = "Selamat malam kak"
  }
  return res
}