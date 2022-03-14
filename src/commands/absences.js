const absences = async (cv, command) => {
    cv.getAbsences().then((absences) => {
        let allabsences = '';
        absences.map(opt => {

            allabsences += String.raw`
            ╔══════════════════════════╗
            ║ Data: ${opt.evtDate}         
            ║ Tipo: ${opt.justifReasonDesc}         
            ╚══════════════════════════╝
            `
        })
        console.log(allabsences);
    })

}

module.exports = { absences };