const grades = async (cv, command) => {
    cv.getGrades().then((grades) => {
        let votes = '';
        grades.map(opt => {
            votes += `\n ${opt.subjectDesc} - ${opt.displayValue}`
        })
        console.log(votes);
    })

}

module.exports = { grades };