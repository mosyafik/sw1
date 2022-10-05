import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
import knights from 'knights-canvas'
export async function all(m) {
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let name = await this.getName(who)
	let chat = global.db.data.chats[m.chat]
    let { isBanned } = global.db.data.chats[m.chat]
    let { banned } = global.db.data.users[m.sender]
    let { group } = global.db.data.settings
    let setting = global.db.data.settings
    let user = global.db.data.users[m.sender]
    

    if (chat.autoReply) {
    // ketika ada yang kirim anu
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat.whatsapp.com') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `${wm}

        ╭━━━━「 SEWA 」
        ┊⫹⫺ Hemat: 10k/grup (1 minggu)
        ┊⫹⫺ Normal: 28k/grup (1 bulan)
        ┊⫹⫺ Standar: 45k/grup (2 bulan)
        ┊⫹⫺ Pro: 70k/grup (4 bulan)                                                      
        ┊⫹⫺ Vip: = 100k/grup (12 bulan)
        ╰═┅═━––––––๑
        
        ╭━━━━「 PREMIUM 」
        ┊⫹⫺ Hemat: 7k (1 minggu)
        ┊⫹⫺ Normal: 20k (1 bulan)
        ┊⫹⫺ Pro: 45k (4 bulan)
        ┊⫹⫺ Vip: 60k (8 bulan)                                               
        ┊⫹⫺ Permanent: = 80k (Unlimited)
        ╰═┅═━––––––๑
        
        ⫹⫺ PAYMENT:
        • Pulsa Telkomsel: [-]
        • Dana: [089699005480]
        • Gopay: [089699005480]
        • Ovo: [089699005480]
        • Link Aja: [-]
        
        Nomor Owner :
        wa.me/628981574999
        
        ▌│█║▌║▌║║▌║▌║█│▌
        
        #BY Mos
        `.trim(), wm, 'Pemilik Bot', '.owner', m)
await this.reply(nomorown + '@s.whatsapp.net', `Ada Yang Mau Nyulik nih :v \n\ndari: @${m.sender.split("@")[0]} \n\npesan: ${m.text}`, m, { mentions: [m.sender] })
    }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'reactionMessage') {
    let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Mengirim Reaction [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
        
    // ketika ada yang kirim anu
    if (m.mtype === 'paymentMessage') {
    let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Meminta Uang :> [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'productMessage') {
    let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Promosi :> [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'orderMessage') {
    let caption = `Terdeteksi ${name} @${who.split("@")[0]} Lagi Meng Order :> [ ${m.text} ]`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    
    // ketika ada yang kirim anu
    if (m.mtype === 'stickerMessage') {
    this.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
    
    // ketika ada yang kirim anu
    if (m.text.includes('🗿')) {
    this.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
        
    // ketika ada yang kirim anu
    
    // bot
    if (/^(aktif|w(ey|oi)|bot|ha[iy]|we|oy|p)$/i.test(m.text)) {
    let apsih = ["Kenapa",
"Avaan coek:v",
"Naon meng",
"Iya, bot disini",
"Luwak white coffe passwordnya",
"Hmmm, kenapa",
"Paansih🤨",
"Okey bot sudah aktif",
"2, 3 tutup botol",
"Bot aktif coy"]
        let caption = `*${apsih.getRandom()}* kak ${name} @${who.split("@")[0]} 🗿`
    this.sendButton(m.chat, caption, wm, null, [[user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? '/owner' : '/menu']], m, { mentions: this.parseMention(caption) })
        }
    }

    return !0
}
