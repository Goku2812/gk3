let handler = async (m, { command, text }) => m.reply(`
*╔═══*💥 *4 VS 4* *EXTERNO*💥
*╟❧*  *HiGHER ANGELS*
*╟*
*╟❧*  ⏰  *5:45 PM*  🇲🇽
*╟❧*  ⏰  *6:45 PM*  🇪🇨
*╟* 
*╟❧*  *INFINITO*
*╟*
*╟❧* *USO DE DISCORD OBLIGATORIO*
*╟*
*╚══* *ESCUADRA* 
*╟❧*🎅
*╟❧*🎅
*╟❧*🎅
*╟❧*🎅
*╚══* *SUPLENTES*
*╟❧*⛄
*╟❧*⛄
*╚══* *DONADOR DE SALA*
*╟❧*❄️
*╚═*❄️
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['vs <texto>?']
handler.tags = ['kerang']
handler.command = /^vs4.i.6$/i
export default handler
