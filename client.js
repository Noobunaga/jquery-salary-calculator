let employee = [];

$(document).ready(readyNow);

function readyNow(){
  $('#addEmployeeButton').on('click', addEmployee);
}

function newEmployee(firstNameInput, lastNameInput, idInput, titleInput, salaryInput){
  console.log(firstNameInput, lastNameInput, idInput, titleInput, salaryInput);
  const newEmployee = {
    First Name: firstNameInput,
    Last Name: lastNameInput,
    Id: idInput,
    Title: titleInput,
    Annual Salary: salaryInput,
  }
  employee.push(newEmployee);
  return true;


  //function to let button work
function addEmployee() {
    let firstName = $('#firstNameInput');
    let lastName = $('#lastNameInput');
    let id = $('#idInput');
    let title = $('#titleInput');
    let annualSalary = $('#salaryInput')
    newEmployee(firstName.val(), lastName.val(), id.val(), title.val(), salary.val());
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
  
    displayEmployee();
    
  }