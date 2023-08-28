//Sc by Xyro base Clara MD
//Di Tulis Ulang VynaChan
//Buat lu semua yang jual sc ini gua ga bakal share lagi!

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285786539008', 'Fahrul', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285786539008' //Ganti
global.packname = '© Sticker by'
global.author = 'F.A BOTZ MD'
global.namebot = 'F.A BOTZ MD'
global.wm = '© F.A BOTZ MD By Fahrul'
global.stickpack = '© Sticker by'
global.stickauth = 'F.A BOTZ MD'
// Link Sosmed
global.sig = '-'
global.sgh = '-'
global.sgc = '-'
// Donasi
global.psaweria = '085786539008'
global.ptrakterr = '085786539008'
global.povo = '085786539008'
// Info Wait
global.wait = '⏳ Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'PAEjDGfws8'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "PAEjDGfws8",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})