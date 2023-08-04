var { youtubeSearch } = require('@bochilteam/scraper');
var hxz = require('hxz-api');
var handler = async (m, {
    conn,
    text,
    usedPrefix
}) => {
    if (!text) throw 'Enter Title / Link From YouTube!'
    try {
        var vid = (await youtubeSearch(text)).video[0]
        if (!vid) throw 'Video/Audio Tidak Ditemukan'
        var {
            title,
            description,
            thumbnail,
            videoId,
            durationH,
            durationS,
            viewH,
            publishedTime
        } = vid
        if (durationS >= 3600) { 
            m.reply('Video is longer than 1 hour!')
        } else {
            var url = 'https://www.youtube.com/watch?v=' + videoId
            var cvr
            try {
                cvr = await hxz.youtube(url)
            } catch (e) {
                conn.reply(m.chat, wait, m)
                cvr = await hxz.youtube(url) 
            }
            var sce = cvr.mp3
            var tmb = thumbnail
            var captionvid = `∘ Title: ${title}\n∘ Published: ${publishedTime}\n∘ Duration: ${durationH}\n∘ Second: ${durationS}\n∘ Views: ${viewH}\n∘ Url:  ${url}\n∘ Description: ${description}`
            var pesan = await conn.sendMessage(m.chat, {
                text: captionvid,
                contextInfo: {
                    externalAdReply: {
                        title: "",
                        body: "Powered by " + wm,
                        thumbnailUrl: tmb,
                        sourceUrl: url,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }}}, { quoted: m})
            })
            conn.sendMessage(m.chat, {
                audio: {
                    url: sce
                },
                mimetype: 'audio/mpeg',
                contextInfo: {
                    externalAdReply: {
                        title: title,
                        body: "",
                        thumbnailUrl: tmb,
                        sourceUrl: url,
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                        }}}, { quoted: m})
        }
    } catch (e) {
       //m.reply('Error: ' + e)
       //var eror = e.toString() 
       conn.reply(m.chat, `*Error:* ` + eror, m)
    }
}
handler.command = handler.help = ['tes', 'song', 'ds', 'ydl'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;
module.exports = handler;