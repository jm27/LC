// Create get students function

function getStudents(classroom) {
    // De-structure object into variables
    let {hasTeachingAssisstant, classList} = classroom;
    let teacher, teachingAssistant, students;
    // if there is teaching assistant get it, else spread students
    if(hasTeachingAssisstant) {
        [teacher, teachingAssistant, ...students] = classList;
    } else {
        [teacher, ...students] = classList;
    }
    return students;
}

console.log(
    getStudents(
        {
            hasTeachingAssisstant: false, 
            classList: ['Rashida', 'John', 'Roman', "Lisa", "Omair", "Lukas"],
        }
    )
)