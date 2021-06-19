/* ดึงข้อมูลผ่าน POST MAN */

// นักเรียน 1 คน
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

// GET ข้ อมูลจาก POSTMAN - > นั กเรียน 1 ตน

// function onLoad() {
//     fetch('https://dv-student-backend-2019.appspot.com/student')
//         .then((response) => {
//             return response.json()
//         }).then(data => {

//             addStudentData(data)
//         })


// }
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

// นักเรียนหลายคน

function addStudentList(studentList) {
    let counter = 1
    for (student of studentList) {
        addStudentToTable(counter++, student)
    }
}

function addStudentToTable(index, student) {

    const tableBody = document.getElementById('tableBody');
    let row = document.createElement('tr');
    let cell = document.createElement('th');
    let img = document.createElement('img');
    cell.setAttribute('score', 'row');
    cell.innerHTML = index;
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerHTML = `${student.name}${student.surname}`;
    row.appendChild(cell);
    cell = document.createElement('td');
    img.setAttribute('src', student.image);
    img.classList.add('img-thumbnail'); // ใส้กรอกให้เฉยๆ
    cell.appendChild(img);
    row.appendChild(cell);
    cell = document.createElement('td');
    cell.innerHTML = student.gender;
    row.appendChild(cell);
    tableBody.appendChild(row);


}
// GET ข้อมูลจาก POSTMAN - > นักเรียนหลายคน
function onLoad() {
    fetch('https://dv-student-backend-2019.appspot.com/students')
        .then((response) => {
            return response.json()
        }).then(data => {

            addStudentList(data)
        })


}