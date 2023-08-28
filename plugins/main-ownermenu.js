let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/dc3ed7b279d775b9f356f.jpg'
let sewa = `
╔━━━『 *Main Menu* 』
┃ ⬡ .ai
┃ ⬡ .openai
┃ ⬡ .sewa
┃ ⬡ .simi
┃ ⬡ .bannedlist
┃ ⬡ .botstatus
┃ ⬡ .owner
┃ ⬡ .creator
┃ ⬡ .listgc
┃ ⬡ .ping
┃ ⬡ .report
┃ ⬡ .request
┃ ⬡ .rules
┃ ⬡ .runtime
┃ ⬡ .sewa
┃ ⬡ .sewa
┃ ⬡ .server
┃ ⬡ .totalfitur
┃ ⬡ .tqto
┃ ⬡ .user
┃ ⬡ .afk
┃ ⬡ .ceksn
┃ ⬡ .daftar
┃ ⬡ .register
┃ ⬡ .fakespam
┃ ⬡ .botstatus
┃ ⬡ .menfess
┃ ⬡ .menu
┃ ⬡ .menu2
┃ ⬡ .unregister
┃ ⬡ .profile
┃ ⬡ .store
╚━━━━━━━━━━━━✧

 _© fahrul_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['ownermenu']
handler.tags = ['main']
handler.command = /^(ownermenu)$/i

export default handler