let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/dc3ed7b279d775b9f356f.jpg'
let sewa = `
╔━━━『 *Internet Menu* 』
┃ ⬡ .artic
┃ ⬡ .bukalapak
┃ ⬡ .charagi
┃ ⬡ .cuaca
┃ ⬡ .fetch
┃ ⬡ .get
┃ ⬡ .gempa
┃ ⬡ .githubsearch
┃ ⬡ .gimage
┃ ⬡ .google
┃ ⬡ .heroml
┃ ⬡ .jadwalbola
┃ ⬡ .lk21search
┃ ⬡ .liriklagu
┃ ⬡ .mahasiswa
┃ ⬡ .playstore
┃ ⬡ .soundsearch
┃ ⬡ .ssweb
┃ ⬡ .wattpad
┃ ⬡ .wikipedia
┃ ⬡ .wikimedia
┃ ⬡ .xnxxsearch
┃ ⬡ .monitor
┃ ⬡ .katanime
┃ ⬡ .renungan
┃ ⬡ .chord
┃ ⬡ .jadwaltv
┃ ⬡ .webcek
┃ ⬡ .wikipedia <apa>
╚━━━━━━━━━━━━✧
 _© fahrul_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['internet']
handler.tags = ['main']
handler.command = /^(internet)$/i

export default handler