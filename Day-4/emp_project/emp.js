let employees =
JSON.parse(localStorage.getItem("employees"))
|| [];

displayEmployees();

function addEmployee() {

    let name =
    document.getElementById("empName").value;

    let age =
    document.getElementById("empAge").value;

    let department =
    document.getElementById("empDepartment").value;

    let salary =
    document.getElementById("empSalary").value;

    if(
        name === "" ||
        age === "" ||
        department === "" ||
        salary === ""
    ){
        alert("Please fill all fields");
        return;
    }

    let employee = {

        id:
        "EMP" +
        Math.floor(
            1000 +
            Math.random() * 9000
        ),

        name:name,
        age:age,
        department:department,
        salary:salary
    };

    employees.push(employee);

    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );

    clearForm();

    displayEmployees();
}

function displayEmployees() {

    let table =
    document.getElementById("employeeTable");

    table.innerHTML = "";

    employees.forEach(function(emp){

        table.innerHTML += `

        <tr>

            <td>${emp.id}</td>

            <td>${emp.name}</td>

            <td>${emp.age}</td>

            <td>${emp.department}</td>

            <td>${emp.salary}</td>

            <td>

                <button
                    class="edit-btn"
                    onclick="editEmployee('${emp.id}')">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteEmployee('${emp.id}')">
                    Delete
                </button>

            </td>

        </tr>

        `;
    });

    updateStats();
}

function updateStats(){

    document.getElementById(
        "totalEmployees"
    ).textContent =
    employees.length;

    let totalSalary =
    employees.reduce(
        (sum, emp) =>
        sum + Number(emp.salary),
        0
    );

    document.getElementById(
        "totalSalary"
    ).textContent =
    "₹" + totalSalary;

    let departments =
    [...new Set(
        employees.map(
            emp => emp.department
        )
    )];

    document.getElementById(
        "totalDepartments"
    ).textContent =
    departments.length;
}

function deleteEmployee(id){

    if(
        !confirm(
            "Are you sure you want to delete?"
        )
    ){
        return;
    }

    employees =
    employees.filter(
        emp => emp.id !== id
    );

    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );

    displayEmployees();
}

function editEmployee(id){

    let employee =
    employees.find(
        emp => emp.id === id
    );

    document.getElementById(
        "empName"
    ).value =
    employee.name;

    document.getElementById(
        "empAge"
    ).value =
    employee.age;

    document.getElementById(
        "empDepartment"
    ).value =
    employee.department;

    document.getElementById(
        "empSalary"
    ).value =
    employee.salary;

    employees =
    employees.filter(
        emp => emp.id !== id
    );

    localStorage.setItem(
        "employees",
        JSON.stringify(employees)
    );

    displayEmployees();
}

function searchEmployee(){

    let searchValue =
    document
    .getElementById("search")
    .value
    .toLowerCase();

    let rows =
    document.querySelectorAll(
        "#employeeTable tr"
    );

    rows.forEach(function(row){

        let employeeName =
        row.children[1]
        .textContent
        .toLowerCase();

        let department =
        row.children[3]
        .textContent
        .toLowerCase();

        if(
            employeeName.includes(searchValue)
            ||
            department.includes(searchValue)
        ){
            row.style.display="";
        }
        else{
            row.style.display="none";
        }
    });
}

function sortByName(){

    employees.sort(
        (a,b)=>
        a.name.localeCompare(b.name)
    );

    displayEmployees();
}

function sortBySalary(){

    employees.sort(
        (a,b)=>
        b.salary-a.salary
    );

    displayEmployees();
}

function toggleTheme(){

    document.body
    .classList
    .toggle("dark");
}

function filterSalary(value){

    let rows =
    document.querySelectorAll(
        "#employeeTable tr"
    );

    rows.forEach(function(row){

        let salary =
        Number(
            row.children[4]
            .textContent
        );

        if(
            value === "" ||
            salary >= Number(value)
        ){
            row.style.display="";
        }
        else{
            row.style.display="none";
        }
    });
}

function exportCSV(){

    let csv =
    "ID,Name,Age,Department,Salary\n";

    employees.forEach(emp => {

        csv +=
        `${emp.id},${emp.name},${emp.age},${emp.department},${emp.salary}\n`;

    });

    let blob =
    new Blob(
        [csv],
        {type:"text/csv"}
    );

    let link =
    document.createElement("a");

    link.href =
    URL.createObjectURL(blob);

    link.download =
    "employees.csv";

    link.click();
}

function clearForm(){

    document.getElementById(
        "empName"
    ).value="";

    document.getElementById(
        "empAge"
    ).value="";

    document.getElementById(
        "empDepartment"
    ).value="";

    document.getElementById(
        "empSalary"
    ).value="";
}