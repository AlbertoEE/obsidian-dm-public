---
type: session
sessionNum: 
creation-date: <% tp.file.creation_date() %>
modification-date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
---
campaign:: <% tp.user.getCampaignLink(tp) %>

---

# ==<% tp.file.title %>==

## En anteriores capítulos
{Introducir breve descripción de lo que pasó la última sesión}

## Escenas
```button
name Add Scene 
type append template 
action createNewScene
```

```dataview
TABLE FROM "Private/Scenes"
WHERE session = this.file.link
```
## Resumen de la sesión
