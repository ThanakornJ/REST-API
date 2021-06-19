let id = document.getElementById('id');
let stuentId = document.getElementById('studentId');
let nameStudent = document.getElementById('name');
let gpa = document.getElementById('gpa');
let img = document.getElementById('image');

function addStudentData(student) {
    id.innerHTML = student.id;
    stuentId.innerHTML = student.studentId;
    nameStudent.innerHTML = `${student.name} ${student.surname}`;
    gpa.innerHTML = student.gpa;
    img.setAttribute('src', student.image);
}



function onLoad() {
    fetch('https://dv-student-backend-2019.appspot.com/student')
        .then((response) => {
            return response.json()
        }).then(data => {

            addStudentData(data)
        })


}