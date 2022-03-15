const absences = async (cv, command) => {
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

}

module.exports = { absences };