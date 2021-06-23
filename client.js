let employees = [new Employee('Poua', 'Yang', '1278', 'Auto Tech', '100000')];

//Lets jQuery operate. You can put multiple functions into this. I did not 
//understand what this what the reason this was really being used for. After
//Chad explained it and I could see what was happening and why it was happening
// in the overview it makes much more sense.
$(document).ready(function() {
  console.log('REDO!');
  pageReady();
  //this the listening for the Add Employee button Click and runs the function
  //I have to let it know to enter the inputs.
  $('#addEmployeeBtn').on('click', addEmployee);
  //this is targeting the employee list id we defined in the html. Since each
  //new employee add will need their own delete button we need to generate
  // it and that is why we cannot have a button for each space but for what
  //ever is put in the whole body since we can have any number of employees 
  //and can go on forever really. 
  $('#employeeList').on('click', '.btn-warning',function() {
    const employeeId = $(this).data('id');
    console.log('Delete Employee: ', employeeId);
    deleteEmployee(employeeId);
  });
});

function pageReady(){
  updateTable();
}

// Capital 'E' makes Employee into constructor and lets you pull/target 
// parameters out with 'this.' 
function Employee(firstName, lastName, employeeId, title, salary){
  this.firstName = firstName;
  this.lastName = lastName;
  this.employeeId = employeeId;
  this.title = title;
  this.salary = salary;
}

const firstName = function(){
  return $('#firstName').val();
}
const lastName = function(){
  return $('#lastName').val();
}
const employeeId = function(){
  return $('#employeeId').val();
}
const title = function(){
  return $('#title').val();
}
const salary = function(){
  return $('#salary').val();
}

//this function lets the input fields clear once the employee has been admitted.
function clearFields(){
  $('#firstName').val('');
  $('#lastName').val('');
  $('#employeeId').val('');
  $('#title').val('');
  $('#salary').val('');
}

//this is generating each new employee's info and putting them into their  
//designated blocks along with taking note of their salary.
function employeeRow(Employee){
  let annualSalary = Number(Employee.salary)
  console.log(annualSalary);
  return `
    <tr>
      <td scope="row">${Employee.firstName}</td>
      <td>${Employee.lastName}</td>
      <td>${Employee.employeeId}</td>
      <td>${Employee.title}</td>
      <td>${Employee.salary}</td>
      <td><button data-id="${
        Employee.employeeId
      }" class="btn btn-warning">Delete</button>
    </tr>
    `;
}

//This function is clearing the deleted employee's info in the blocks and
//reset the table of those blocks and space.
function clearTable() {
  $('#employeeList').empty();
}

//This function is what generates the new row for the employee and injects 
//the inject into the blocks. I had a REALLY hard time understanding what and
//why to use 'append'.
function populateTable() {
  for(let employee of employees){
    $('#employeeList').append(employeeRow(employee));
  }
}

//this function is just the normal add employee function and it calls a few
//other functions once called on.
function addEmployee() {
  let newEmployee = new Employee(firstName(),lastName(),employeeId(),title(),salary());
  console.log(newEmployee);
  employees.push(newEmployee);
  updateTable();
}

//This function lets the delete button delete. I was really confused last week 
//with this new way of writing the code. I did not understand where we were
//getting 'emp' from and why we use it there. But its because of the 'Employee'
//constructor that lets the js know what emp is referencing to. I could not 
//wrap my head around this this past weekend. I didn't understand where this
//variable was established.
function deleteEmployee(employeeId){
  employees = employees.filter(emp => employeeId !== Number(emp.employeeId));
  updateTable();
}

//This function updates everything when it is called in any of the functions
//such as adding employees or deleting them.
function updateTable(){
  clearTable();
  clearFields();
  populateTable();
  updateMonthlyTotal();
}

//function to get the monthly salary from the input annual salary.
function getMonthlyTotal(){
  let total = 0;
  for (const emp of employees){
    total += Number(emp.salary);
  }
  return total / 12;
}

//function to creat the new row where the total is injected into, with a fancy
//way to put the money sign in front of our monthly salary.
function updateMonthlyTotal(){
  let monthlyTotal = getMonthlyTotal();
  $('#totalSalary').empty().append(`
    <tr>
      <td scope="row" class="bg-secondary">
      <td class="bg-secondary"></td>
      <td class="bg-secondary"></td>
      <td class="bg-secondary"></td>
      <td class="bg-light">Monthly Total:</td>
      <td id="total">
      ${monthlyTotal.toLocaleString(
          "en-US", {style: "currency", currency: "USD"})
        }
      </td>
    </tr>
  `);
  //This is what calculates when we go over budget and then sets the red to
  //display.
  if (monthlyTotal > 20000) {
    $('#total').addClass('bg-danger text-white');
  }
}