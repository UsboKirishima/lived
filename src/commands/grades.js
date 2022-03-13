const grades = async (cv, command) => {
    if(command.toLowerCase().includes('voti')) {
        cv.getGrades().then((grades) => {
            let votes = '';
            grades.map(opt => {
                votes += ` ${opt.displayValue}`
            })
            console.log(votes);
        })
    }

}

module.exports = { grades };