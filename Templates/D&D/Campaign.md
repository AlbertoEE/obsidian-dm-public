---
type: campaign
creation-date: 2022-09-16 22:08
modification-date: Saturday 17th September 2022 11:26:40
---
worlds::

---
# <% tp.file.title %>
## Players
```dataview
TABLE
FROM "Private/Players"
WHERE contains(campaigns, this.file.link)
```
## Sesiones
```button
name Add Session 
type append template 
action createNewSession
```
^button-jgsq
```dataview
TABLE FROM "Public/Sessions"
WHERE campaign = this.file.link
```
## NPCs
```button
name Add NPC 
type append template 
action createNewNpc
```
^button-jg7q
```dataview
TABLE FROM "Public/NPCs"
WHERE contains(campaigns, this.file.link)
```
