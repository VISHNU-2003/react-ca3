import React from 'react'

function List({ employees, handleEdit, handleDelete }) {

    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: null
    });

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                    
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{formatter.format(employee.salary)}</td>
                                <td>{employee.date} </td>
                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List

// The provided code is a React functional component that renders a table of employees. The component takes in three props: `employees`, `handleEdit`, and `handleDelete`.

// The `employees` prop is an array of objects that represent the employee data to be displayed in the table. Each object contains properties such as `id`, `firstName`, `lastName`, `email`, `salary`, and `date`.

// The `handleEdit` and `handleDelete` props are callback functions that are called when the Edit and Delete buttons are clicked, respectively. These functions receive the `id` of the employee as a parameter, which can be used to perform the corresponding action on the employee data.

// Inside the component, a new `Intl.NumberFormat` object is created to format the `salary` value of each employee as a currency string. The currency format is set to US dollars by default, but this can be changed to any other currency by modifying the `currency` property of the `formatter` object.

// The component renders a `table` element with a header row and a body containing the employee data. If there are no employees in the `employees` array, a message "No Employees" is displayed in a row with `colSpan` set to 7.

// For each employee in the `employees` array, a row is created with the employee data displayed in each column. The `formatter.format()` method is used to format the `salary` value as a currency string using the `Intl.NumberFormat` object created earlier.

// Each row also contains two buttons: an Edit button and a Delete button. When clicked, these buttons call the corresponding callback functions passed in as props and pass in the `id` of the employee as a parameter. This allows the parent component to perform the appropriate action on the employee data.