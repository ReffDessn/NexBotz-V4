let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak Akeno tadi ketiduran😊* ')
}

handler.tags = ['main']
handler.command = /^(akenoon)$/i

handler.admin = true

export default handler
