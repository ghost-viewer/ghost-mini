/*

  !- ©ɴɪᴍᴇꜱʜᴋᴀ-dev
  https://wa.me/94721584279
  
*/

require("./all/module.js")
//========== Setting ==========//
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
////////////////////////////////////////////////

global.tumb = ["https://files.catbox.moe/pf7ytb.jpg", "https://files.catbox.moe/9wrrby.jpg", "https://files.catbox.moe/n8g2o7.jpg", "https://files.catbox.moe/p4y0sz.jpg", "https://files.catbox.moe/qchzmy.jpg", "https://files.catbox.moe/qld3cd.jpg"]

global.owner = ["94721584279"]  
global.saluran = "0943932269217268e+33@newsletter"
global.idgc = "120363421044739622@g.us" 

global.tokenVercel = "_" //Token vercel mu (search vercel token)
global.tokenGithub = "_" // Token github mu (search github token)
global.usnGithub = "_" // Nama akun gtihub mu

global.botname = "ɴᴇɴᴏ-xᴍᴅ༒ᴍɪɴɪ" ///setting nama bot
global.ownername = 'ᴏᴡɴᴇʀ-ɴɪᴍᴇꜱʜᴋᴀ '
global.ownerNumber = ["94721584279@s.whatsapp.net"] 
global.wagc = "https://chat.whatsapp.com/Ekoe6EykUJf0KfQShsBfoN" 
global.wm = "nimeshka-mihiran。" 
global.wmbot = "NENO_XMD_MINI" 
global.packname = "NENO"
global.author = "• ᴅᴇᴠ | ɴɪᴍᴇꜱʜᴋᴀ "
global.prefa = ['','!','.','#','&']
global.typemenu = "button" //button, payment, polling, product

//-+++-//
global.public = true /// true = hidup/on  /// false = mati/of
global.welcome = true
global.readchat = true

//messages
global.mess = {
    success: '✓ 🅂🅄🄲🄲🄴🅂\nSuccess! `>//<`',
    admin: '∅ 🄰🄲🄲🄴🅂 🄳🄴🄽🄸🄴🄳\nThis feature is only for group admins.',
    botAdmin: '∅ 🄰🄲🄲🄴🅂 🅁🄴🅀🅄🄸🅁🄴🄳\nThe bot must be an admin to use this feature.',
    owner: '∅ 🄰🄲🄲🄴🅂 🄳🄴🄽🄸🄴🄳\nYou are not the Owner!',
    group: '∅ 🄰🄲🄲🄴🅂 🅁🄴🅂🅃🅁🄸🅃🄲🅃🄴🄳\nThis feature can only be used in group chats.',
    private: '∅ 🄰🄲🄲🄴🅂 🅁🄴🅂🅃🅁🄸🅃🄲🅃🄴🄳\nThis feature can only be used in private chat.',
    wait: '🅟🅛🅔🅐🅢🅔 🅦🅐🅘🅣'
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
