let handler = m => m

handler.all = async function (m) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp.toNumber() - this.spam[m.sender].lastspam > 10) {
            if (this.spam[m.sender].count > 15) {
                global.db.data.users[m.sender].banned = true
                m.reply('Kamu Sudah Kubanned!, Karena Spam!\nHubungi Wa.me/6281952930538\nJika Ingin Di Unban')
            }
            this.spam[m.sender].count = 0
            this.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}

module.exports = handler