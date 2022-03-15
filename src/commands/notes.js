const notes = async (cv, command) => {
    cv.getNotes().then((note) => {
        let allnotes = '';
        note.NTTE.map(opt => {
            allnotes += String.raw`
╔══════════════════════════════════════════════════════════════════════════════
║ Data: ${opt.evtDate}         
║ Docente: ${opt.authorName}         
║ Motivo: ${opt.evtText}
║
║
╚══════════════════════════════════════════════════════════════════════════════
            `
        })
        console.log(allnotes);
    })
}

module.exports = { notes };