function attachEvents() {
    const tableBodyElement = document.querySelector('#results tbody');
    const submitButtonElement = document.getElementById('submit');
    const divNewStudentData = document.querySelector('.inputs');

    const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

    fetch(baseUrl)
        .then(data => data.json())
        .then(data => {
            for (const student in data) {
                const tableRowElement = document.createElement('tr');

                const tableDataFirstName = document.createElement('td');
                tableDataFirstName.textContent = data[student].firstName;
                console.log(tableDataFirstName.value);

                const tableDataLastName = document.createElement('td');
                tableDataLastName.textContent = data[student].lastName;

                const tableDataFacultyNumber = document.createElement('td');
                tableDataFacultyNumber.textContent = data[student].facultyNumber;

                const tableDataGrade = document.createElement('td');
                tableDataGrade.textContent = data[student].grade;

                tableRowElement.appendChild(tableDataFirstName);
                tableRowElement.appendChild(tableDataLastName);
                tableRowElement.appendChild(tableDataFacultyNumber);
                tableRowElement.appendChild(tableDataGrade);

                tableBodyElement.appendChild(tableRowElement);
            }
        })

        submitButtonElement.addEventListener('click', () => {
            const newStudentFirstNameElement = divNewStudentData.querySelector('input[name=firstName]');
            const newStudentLastNameElement = divNewStudentData.querySelector('input[name=lastName]');
            const newStudentFacultyNumberElement = divNewStudentData.querySelector('input[name=facultyNumber]');
            const newStudentGradeElement = divNewStudentData.querySelector('input[name=grade]');


            if (newStudentFirstNameElement.value === '' || newStudentLastNameElement === '' 
            || newStudentFacultyNumberElement === '' || newStudentGradeElement === '') {
                return;
            }

            const tableRowElement = document.createElement('tr');

            const tableDataFirstName = document.createElement('td');
            tableDataFirstName.textContent = newStudentFirstNameElement.value;

            const tableDataLastName = document.createElement('td');
            tableDataLastName.textContent = newStudentLastNameElement.value;

            const tableDataFacultyNumber = document.createElement('td');
            tableDataFacultyNumber.textContent = newStudentFacultyNumberElement.value;

            const tableDataGrade = document.createElement('td');
            tableDataGrade.textContent = newStudentGradeElement.value;

            tableRowElement.appendChild(tableDataFirstName);
            tableRowElement.appendChild(tableDataLastName);
            tableRowElement.appendChild(tableDataFacultyNumber);
            tableRowElement.appendChild(tableDataGrade);

            tableBodyElement.appendChild(tableRowElement);
        })


}

attachEvents();