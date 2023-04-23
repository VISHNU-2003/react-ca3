import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { employeesData } from '../../data';

function Dashboard() {

    const [employees, setEmployees] = useState(employeesData);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [employee] = employees.filter(employee => employee.id === id);

        setSelectedEmployee(employee);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = employees.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setEmployees(employees.filter(employee => employee.id !== id));
            }
        });
    }


    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
        </div>
    )
}

export default Dashboard;
//This is a React component named `Dashboard`. It imports several other components: `Header`, `List`, `Add`, and `Edit`. It also imports some data from a file named `data.js`.

// The component maintains state using the `useState` hook for four variables:
// - `employees`: an array of employee objects
// - `selectedEmployee`: an object representing the currently selected employee for editing
// - `isAdding`: a boolean indicating whether the user is in "add employee" mode
// - `isEditing`: a boolean indicating whether the user is in "edit employee" mode

// The `handleEdit` function is called when the user clicks the "Edit" button on an employee in the `List` component. It finds the selected employee object from the `employees` array using the `id` parameter and sets the `selectedEmployee` and `isEditing` variables to enable editing mode.

// The `handleDelete` function is called when the user clicks the "Delete" button on an employee in the `List` component. It displays a confirmation modal using the `Swal` library and removes the selected employee from the `employees` array if the user confirms the deletion.

// The `Dashboard` component conditionally renders different child components based on the values of the `isAdding` and `isEditing` variables. If neither is `true`, it renders the `Header` and `List` components. If `isAdding` is `true`, it renders the `Add` component. If `isEditing` is `true`, it renders the `Edit` component.

// Overall, this component manages the state and logic for an employee management dashboard. It allows the user to add, edit, and delete employees and displays a list of all employees in the system.