let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/dc3ed7b279d775b9f356f.jpg'
let sewa = `
╔━━━『 *Sticker Menu* 』
┃ ⬡ .attp <teks>
┃ ⬡ .bonk
┃ ⬡ .getexif
┃ ⬡ .qc
┃ ⬡ .sticker
┃ ⬡ .s
┃ ⬡ .toimg
┃ ⬡ .tovideo
┃ ⬡ .ttp2
┃ ⬡ .ttp
┃ ⬡ .wm
╚━━━━━━━━━━━━✧
 _© fahrul_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['stikermenu']
handler.tags = ['main']
handler.command = /^(stikermenu)$/i

export default handler