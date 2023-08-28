-let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/dc3ed7b279d775b9f356f.jpg'
let sewa = `
╔━━━『 *AI Menu* 』
┃ ⬡ .beauty
┃ ⬡ .tocartoon
┃ ⬡ .dalle
┃ ⬡ .gpt
┃ ⬡ .hairstyle
┃ ⬡ .openai
┃ ⬡ .ocr
┃ ⬡ .pixardif
┃ ⬡ .remini
┃ ⬡ .color
┃ ⬡ .hdr
┃ ⬡ .toanime
┃ ⬡ .txt2img
┃ ⬡ .blur
╚━━━━━━━━━━━━✧
 _© fahrul,_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['aimenu']
handler.tags = ['main']
handler.command = /^(aimenu)$/i

export default handler