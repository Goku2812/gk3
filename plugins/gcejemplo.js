import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://i.imgur.com/xDeUxrB.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `*π·πΎπ»π° ππ΄ ππ°π π²π°πΌπ±πΈπ°π π΄π» π½πΎπΌπ±ππ΄ π πππΈπ΄ππ΄π* *πΈπ½πΈπ²πΈπ°π»π΄π π°πππΈ π΄πΉπ΄πΌπΏπ»πΎπ π²πΎπππ΄π²ππΎπ*
ππππππππ  πππ π³ππππ  ππππππππ ππ ππ ππππππ ππ ππππππ ππππ ππ πππππ π πππππ ππππππΜπ π πππ πππππππππ πππ’ ππΜπππ ππππ πππππππ *ππππππ* π’  ππππππππ ππ  ππππππππ ππ πππππππ π πππ πππππππππ.


βα΄΄α΄¬βγ€πΆπΎπΊππ±πΎπ      βοΈ
βα΄΄α΄¬βγ€πΆπΎπΊπγ€π±πΎπ   βοΈ
π«α΄΄α΄¬βπΆπΎπΊππ±πΎπ

 ππ ππππππ *π²π°ππππΏ* πππ πππππ ππ’ππππ π πππππ  ππ ππππππ πππ ππππππππ£π ππ ππ ππππππ πππππ

π΄ππ΄π»π΄π½ππ΄ π³πΈΜπ° π° ππΎπ³πΎπ β€
`.trim()
let buttons = [
]
//{ buttonId: '#infobot', buttonText: { displayText: 'πΎ πΈπ½π΅πΎπ±πΎπ πΎ' }, type: 1 }]
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: 'π πππ ππππ- πππ π',
body: null,
thumbnail: img,
sourceUrl: `https://instagram.com/higher_angels.ff`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[βππππβ] π΄π» πΌπ΄π½π ππΈπ΄π½π΄ ππ½ π΄πππΎπ π π½πΎ π΅ππ΄ πΏπΎππΈπ±π»π΄ π΄π½ππΈπ°ππ»πΎ, ππ΄πΏπΎπππ΄π»πΎ π°π» πΏππΎπΏπΈπ΄ππ°ππΈπΎ π³π΄π» π±πΎπ*', m)
}}
handler.command = /^(ejm|ejemplo|EJEMPLO)$/i
handler.exp = 50
handler.group = true
handler.admin = true
handler.rowner = true
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
