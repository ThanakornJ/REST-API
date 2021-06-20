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

// function addStudentList(studentList) {
//     let counter = 1
//     for (student of studentList) {
//         addStudentToTable(counter++, student)
//     }
// }

// function addStudentToTable(index, student) {

//     const tableBody = document.getElementById('tableBody');
//     let row = document.createElement('tr');
//     let cell = document.createElement('th');
//     let img = document.createElement('img');
//     cell.setAttribute('score', 'row');
//     cell.innerHTML = index;
//     row.appendChild(cell);
//     cell = document.createElement('td');
//     cell.innerHTML = `${student.name}${student.surname}`;
//     row.appendChild(cell);
//     cell = document.createElement('td');
//     img.setAttribute('src', student.image);
//     img.classList.add('img-thumbnail'); // ใส่กรอบให้เฉยๆ
//     cell.appendChild(img);
//     row.appendChild(cell);
//     cell = document.createElement('td');
//     cell.innerHTML = student.gender;
//     row.appendChild(cell);
//     tableBody.appendChild(row);


// }
// GET ข้อมูลจาก POSTMAN - > นักเรียนหลายคน
// function onLoad() {
//     fetch('https://dv-student-backend-2019.appspot.com/students')
//         .then((response) => {
//             return response.json()
//         }).then(data => {

//             addStudentList(data);

//         })


// }

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------- */


// รับ id แล้วค้นหา
let searchButton = document.getElementById('SearchButton');
searchButton.addEventListener('click', () => {
        let idz = document.getElementById('input').value; //ต้องอยู่ข้างใน function
        fetch(`https://dv-student-backend-2019.appspot.com/student/${idz}`)
            .then((response) => {
                return response.json()
            }).then(student => {

                addStudentData(student);

            })


    })
    /*----------------------------------------------------------------------------------------------------------------------------------------------------------------------- */















// เพิ่มข้อมูลจากเว็ปแบบดิบๆ เพิ่มทุกครั้งที่มีการ refrech website
// function onLoad() {
//     student = {
//         name: "Johnั",
//         surname: "Donot",
//         studentId: "Se-004",
//         gpa: "4.00",
//         image: "asset/images/john.jpg"

//     }
//     addStudentToDB(student);

// }

function addStudentToDB(student) {
    fetch('https://dv-student-backend-2019.appspot.com/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)

    }).then((response) => {
        return response.json()
    }).then(data => {

        console.log('success', data)

    })

}


//ลบข้อมูล

function deleteStudent(id) {
    fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`, {
        method: 'DELETE'


    }).then((response) => {

        if (response.status === 200) {
            return response.json()
        } else {
            throw Error(response.statusText); //การทำ Eror Handler แสดงความไม่ถุกต้องของข้อมูล ทำการโยน
        }

    }).then(data => {

        alert(`student name ${data.name} is now deleted`);



    }).catch((error) => { //รับ erorr จาก throw 

        alert('you input student id is not in the database');


    })






}

function onLoad() {


    deleteStudent(7)
}