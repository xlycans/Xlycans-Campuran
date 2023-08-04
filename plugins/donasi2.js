/*let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = require('@adiwajshing/baileys')
let moment = require('moment-timezone')
let fetch = require('node-fetch')
let fs = require('fs')

let qris = 'https://i.ibb.co/QjZmHNg/Gabutt-07-17.jpg'
let handler = async (m, { conn, args, usedPrefix, command }) => {
const messa = await prepareWAMessageMedia({ image: await fetch('https://telegra.ph/file/cad484c5e1445eb390df3.jpg') }, { upload: conn.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage, 
"productId": "5489299044451325",
"title": `Donasi kepada Xlycans`,
"description": `Scan untuk Donasi`,
"currencyCode": "IDR",
"bodyText": wm,
"footerText": wm,
"priceAmount1000": "10000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": wm,
"url": "http://wa.me/6281211265326"
},
"businessOwnerJid": "6281211265326@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })    

conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['donasi2']
handler.tags = ['main']
handler.command = /^(donasi2)$/i

handler.limit = true

module.exports = handler

*/