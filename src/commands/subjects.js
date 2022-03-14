const colors = require('colors');

const subjects = async (cv, command) => {
    cv.getSubjects().then((subjects) => {
        let subs = '';
        subjects.map((sub) => {
            subs += `\n ${sub.description} `;
        })
        console.log(subs);
    })
}

module.exports = { subjects };