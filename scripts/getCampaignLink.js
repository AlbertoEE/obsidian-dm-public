function getCampaignLink (tp) {
    var campaignName = tp.file.title.split("_")[0].replaceAll("-", " ")
    return "[[" + campaignName + "]]"
}

module.exports = getCampaignLink;   