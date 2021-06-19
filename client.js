let employee = [];

$(document).ready(readyNow);

function readyNow(){
  $('#addEmployeeButton').on('click', addEmployee);
}

function newEmployee(firstNameInput, lastNameInput, idInput, titleInput, salaryInput){
  console.log(firstNameInput, lastNameInput, idInput, titleInput, salaryInput);
  $( '#addEmployeeButton').on('click', SubmitInput)
  const newEmployee = {
    first: firstNameInput,
    last: lastNameInput,
    id: idInput,
    title: titleInput,
    salary: salaryInput,
  }
  employee.push(newEmployee);
  return true;


  //function to let button work
function addEmployee() {
    let first = $('#firstNameInput');
    let last = $('#lastNameInput');
    let id = $('#idInput');
    let title = $('#titleInput');
    let salary = $('#salaryInput')
    newEmployee(first.val(), last.val(), id.val(), title.val(), salary.val());
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
  
    displayEmployee();
    
  }

  function displayEmployee() {
    let el = $('#employeeInvOut');
    el.empty();
    for (let employeeInv of employee) {
      console.log(employeeInv);
      el.append (`<li>` + employeeInv.first + ' ' + employeeInv.last + ' ' + employeeInv.id + '' + employeeInv.title + '' + employeeInv.salary + '' + `</li>`)
    }
  }
  