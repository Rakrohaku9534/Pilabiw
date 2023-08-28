let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/dc3ed7b279d775b9f356f.jpg'
let sewa = `
╔━━━『 *Random Menu* 』
┃ ⬡ .nekopoi
┃ ⬡ .asupan
┃ ⬡ .blackpink
┃ ⬡ .bocil
┃ ⬡ .bts
┃ ⬡ .china
┃ ⬡ .cosplay
┃ ⬡ .geayubi
┃ ⬡ .gensin
┃ ⬡ .hentai
┃ ⬡ .indonesia
┃ ⬡ .japan
┃ ⬡ .korea
┃ ⬡ .malaysia
┃ ⬡ .thailand
┃ ⬡ .vietnam
╚━━━━━━━━━━━━✧
 _© fahrul_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['random']
handler.tags = ['main']
handler.command = /^(random)$/i

export default handler