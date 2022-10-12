function createNewSession (tp) {
    const numberOfSessions = app.plugins.plugins.dataview.api
        .pages('"Public/Sessions"')
        .where(page => {
            if(page.campaign.path == tp.file.path(true)) {
                return page
            }
        }).length + 1
    
    const sessionName = tp.file.title.replaceAll(" ","-") + "_" + numberOfSessions

    const file = "Public/Sessions/" + sessionName + ".md"
    
    const folder = app.vault.getAbstractFileByPath("Public/Sessions")

    tp.file.create_new(tp.file.find_tfile("Session"), sessionName, false, folder)
}

module.exports = createNewSession;