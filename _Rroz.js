import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command, __dirname }) => {
  try {
    let info = `Rroz 🗿🤌🏻`

conn.sendMessage(m.chat, {
    text: info,
    contextInfo: {
      externalAdReply: {
        title: '𝐊𝐚𝐧𝐚 𝐀𝐫𝐢𝐦𝐚 - 𝐌𝐃',
        thumbnailUrl: 'https://telegra.ph/file/dc90fd8e1c0a353cf1875.jpg',
        sourceUrl: 'https://whatsapp.com/channel/0029VaEgd3U8fewqgNYZcF2F',
        mediaType: 2,
      }
    }
  }, { quoted: m });
    
  } catch (error) {

    console.error(error)
  }
}

handler.customPrefix = /^(A|a|ª)$/i
handler.command = new RegExp
export default handler