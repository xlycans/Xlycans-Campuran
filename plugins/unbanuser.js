let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan user yang ingin di ban\n\nExample: .ban 6282361160044'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `Berhasil UnBanned User`, m)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.mods = true

module.exports = handler