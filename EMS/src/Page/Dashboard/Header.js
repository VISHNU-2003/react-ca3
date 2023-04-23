import React from 'react';

function Header({ setIsAdding }) {
    return (
        <header>
            <h1 style={{ textAlign: 'center', color: 'white' }}>Employee Management Software</h1>
<div style={{ marginTop: '30px', marginBottom: '18px' }}>

                <button onClick={() => setIsAdding(true)} style={{ backgroundColor: 'orange', color: 'black', borderRadius: '10%', border: 'none', padding: '12px 24px', fontSize: '16px', cursor: 'pointer' }}>Add An Employee</button>
            </div>
        </header>
    );
}

export default Header;
// This is a functional component in React that renders the header of an Employee Management Software. It takes a prop called `setIsAdding` which is a function to control the state of adding a new employee.

// Inside the component, there is a header tag with a h1 tag that displays the title of the software "Employee Management Software". Additionally, there is a button that allows users to add a new employee by calling the `setIsAdding` function with a value of `true` on the `onClick` event.

// The button has a custom style with a background color of orange, black text, rounded corners, and some padding. The cursor is set to a pointer to indicate that the button can be clicked.