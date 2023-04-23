import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [salary, setSalary] = useState('');
    const [date, setDate] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = employees.length + 1;
        const newEmployee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>Add Employee</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
               <label htmlFor="salary">Salary (₹)</label>
                <input
                        id="salary"
                        type="number"
                        name="salary"
                        value={salary}
                        onChange={e => setSalary(e.target.value)}
                        step="1"
                        min="0"
                        lang="en-IN"
                        currency="INR"
                    />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add
// This code is a React component named "Add" which is responsible for adding a new employee to a list of employees. It has several states that hold the values of the first name, last name, email, salary, and date of the new employee. It also has two props, "employees" and "setEmployees", which are used to access and update the list of employees.

// The component has a form with input fields for the user to enter the data of the new employee. It also has a submit button to trigger the "handleAdd" function, which is called when the form is submitted. This function first checks if all the required fields are filled, and if not, it displays an error message using the "Swal.fire" function from the "sweetalert2" library. If all fields are filled, it creates a new employee object with a unique ID and the values entered by the user, pushes this object to the "employees" array, and updates the "employees" state using the "setEmployees" function. It also displays a success message using the "Swal.fire" function.

// To ensure that the focus is set on the first name input field when the component is mounted, the component uses the "useRef" hook to create a reference to this input field and the "useEffect" hook to call the "focus" method on this reference when the component is mounted.

// The component returns a form with input fields and buttons, wrapped in a container div with a class of "small-container". The component is exported as the default export of the module, which means it can be imported and used in other parts of the application.