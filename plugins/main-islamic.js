let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/dc3ed7b279d775b9f356f.jpg'
let sewa = `
╔━━━『 *Islamic Menu* 』
┃ ⬡ .asmaulhusna
┃ ⬡ .ayatkursi
┃ ⬡ .salat <daerah>
┃ ⬡ .niatsholat
╚━━━━━━━━━━━━✧
 _© fahrul_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['islamic']
handler.tags = ['main']
handler.command = /^(islamic)$/i

export default handler