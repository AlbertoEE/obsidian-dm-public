async function createNewNpc (tp) {
    const dataview = app.plugins.plugins.dataview.api
    const campaignLink = "[[" + tp.file.path(true) + "|" + tp.file.path(true).split("/").pop().replace(".md", "") + "]]"
    let world = dataview.page(tp.file.path(true)).worlds

    const folder = app.vault.getAbstractFileByPath("Areas/Gaming/D&D/Public/NPCs")
    let npcName = await tp.system.prompt("Enter NPC name: ")
    let file = await tp.file.create_new(tp.file.find_tfile("NPC"), npcName, false, folder)

    let content = await app.vault.read(file)
    let newContent = content
        .replace("world::", "world:: " + world)
        .replace("campaigns:: ", "campaigns:: " + campaignLink)
    app.vault.modify(file, newContent)
}

module.exports = createNewNpc;