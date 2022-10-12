async function createNewCampaign (tp) {
    const dataview = app.plugins.plugins.dataview.api
    console.log(tp.file.path(true))
    const worldLink = "[[" + tp.file.path(true) + "|" + tp.file.path(true).split("/").pop().replace(".md", "") + "]]"

    const folder = app.vault.getAbstractFileByPath("Areas/Gaming/D&D/Public/Campaigns")
    let campaignName = await tp.system.prompt("Enter Campaign name: ")
    let file = await tp.file.create_new(tp.file.find_tfile("Campaign"), campaignName, false, folder)

    let content = await app.vault.read(file)
    let newContent = content
        .replace("worlds::", "worlds:: " + worldLink)
    app.vault.modify(file, newContent)
    
}

module.exports = createNewCampaign;
