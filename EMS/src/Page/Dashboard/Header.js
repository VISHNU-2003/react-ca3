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
