async function createNewScene (tp) {
    const dataview = app.plugins.plugins.dataview.api
    console.log(tp.file.path(true))
    const sessionLink = "[[" + tp.file.path(true) + "|" + tp.file.path(true).split("/").pop().replace(".md", "") + "]]"
    let campaign = dataview.page(tp.file.path(true)).campaign

    const folder = app.vault.getAbstractFileByPath("Areas/Gaming/D&D/Private/Scenes")
    let sceneName = await tp.system.prompt("Enter Scene name: ")
    let file = await tp.file.create_new(tp.file.find_tfile("Scene"), sceneName, false, folder)

    let content = await app.vault.read(file)
    let newContent = content
        .replace("campaign::", "campaign:: " + campaign)
        .replace("session::", "session:: " + sessionLink)
    app.vault.modify(file, newContent)
}

module.exports = createNewScene;