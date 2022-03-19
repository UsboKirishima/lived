module.exports = {

    readAbsences(cv) {
        cv.getAbsences().then((absences) => {
            let allabsences = '';
            absences.map(opt => {
                let type = '';
                if(opt.justifReasonDesc === null) {
                    type = 'Non specificato';
                } else {
                    type = opt.justifReasonDesc;
                }
    
                allabsences += String.raw`
                ╔══════════════════════════╗
                ║ Data: ${opt.evtDate}         
                ║ Tipo: ${type}         
                ╚══════════════════════════╝
                `
            })
            console.log(allabsences);
        })
    },

    readGrades(cv) {
        cv.getGrades().then((grades) => {
            let votes = '';
            grades.map(opt => {
                votes += `\n ${opt.subjectDesc} - ${opt.displayValue}`
            })
            console.log(votes);
        })
    },

    readNotes(cv) {
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
    },

    readSubjects(cv) {
        cv.getSubjects().then((subjects) => {
            let subs = '';
            subjects.map((sub) => {
                subs += `\n ${sub.description} `;
            })
            console.log(subs);
        })
    }

    
}