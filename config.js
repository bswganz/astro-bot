// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// thank you to zifabotz
// thank you to alpin bot
// thank you to alpin owner
// thank you to astro bot
// thank you to bagus ganz
// thank you to alyabot
// thank you to astro bot
// and thanks you to who support my Bot

gc1 = 'https://chat.whatsapp.com/L3vqKEnh9BA2rbqcfywZ6W'
gc2 = 'https://chat.whatsapp.com/DKfsblwOCTRBa9rrAmI7JA'
global.linkgc = ['https://chat.whatsapp.com/L3vqKEnh9BA2rbqcfywZ6W'] // ganti jadi group lu
global.owner = ['6283163686691'] // ini ganti nomor loh
global.kontak1 = ['6283163686691'] //Ketika ada yang ngetik #owner
global.kontak2 = ['6283829149523'] //nih ganti aja
global.mods = ['0'] // Want some help?
global.prems = ['6283163686691'] // ini ganti nomor loh
global.APIs = { // API Prefix
  // name: 'https://website'
  rey: 'https://server-api-rey.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zeks: 'https://api.zeks.me',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://zekais-api.herokuapp.com': 'apikeymu'
}

pencarikodekey = 'pais'
zekaiskey = 'apikeymu'
lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//teambot      ASTRO BOT
namaig = '@bagusganz284' //ig loh
namayt = 'https://youtube.com/channel/UC5COo3jD63lIGDg_K2MKLlw'
namagithub = 'hah?' //github loh
kasihcaption = `Nih kak`
namakontak1 = 'bagus ganz' //ganti nama loh
namakontak2 = 'bagus ganz' //ganti nama loh

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = 'astro bot' // ganti aja
global.author = 'astro bot' // ganti aja

//yyy
bc = 'astro bot' //astro botbroadcast
footer = '??astro bot' //ganti
namabot = 'astro bot' //ganti
namalu = 'bagus ganz' //ganti
watermark = 'bagus ganz' //ganti

//info
wait = '???????????????90%'
global.botwm = 'astro bot' //ganti
global.wait = 'loading???????????????????????????]99%'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/L3vqKEnh9BA2rbqcfywZ6W'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n???Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; ??? Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,??? \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '??? *server Error tod*'

//global image/foto
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

//image foto
global.image = 'https://telegra.ph/file/0dcd9486f14178abfb76b.jpg' //masukin foto loh

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 40 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
//recode by bagus ganz