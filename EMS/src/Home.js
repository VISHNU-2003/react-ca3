import React,{useState} from 'react'
import './Home.css';
import {NavLink,useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  const [name,setName]= useState();
  const [pwd , setPwd] = useState();
  console.log(name);

  const handleEvent=()=>{
    alert(` Successfully logged in`);
  }
  return (
    
    <div>
    
    

<form action="" onSubmit={handleEvent}>
    <div className="headingsContainer">
        <h3>Sign in</h3>
        <p>Sign in with your username and password</p>
    </div>
    <div className="mainContainer">
        <label forHtml="username">Your username</label>
        <input type="text" placeholder="Enter Username" name="username" value={name} onChange={(e)=>setName(e.target.value)} required/>
        <label forHtml="pswrd">Your password</label>
        <input type="password" placeholder="Enter Password" name="pswrd"  value={pwd} onChange={(e)=>setPwd(e.target.value)} required />
        <br></br>
        <button type="submit" style={{ backgroundColor: 'black', color: 'white' }}>
            <NavLink to="/dashboard" onClick={() => navigate('./Page/Dashboard')}>
                Login
            </NavLink>
        </button>
        {/* <p className="register">Back to  <NavLink to="/register" >Register here!</NavLink></p> */}
    </div>
</form>

    </div>
  )
}

export default Home;

// This is a JavaScript file that defines a React functional component called `Home`. The component renders a login form with input fields for username and password, and a button to submit the form and login.

// Here's a breakdown of the code:

// - The first line imports React and the `useState` hook from the `react` package, as well as a CSS file called `Home.css`, and the `NavLink` and `useNavigate` components from `react-router-dom`.
// - The `Home` component initializes two state variables called `name` and `pwd` using the `useState` hook, and initializes the `navigate` constant using the `useNavigate` hook.
// - The `handleEvent` function is called when the form is submitted. It alerts a message to indicate that the user has successfully logged in. In a real-world scenario, this function would typically make an API call to authenticate the user and obtain a session token.
// - The `return` statement of the `Home` component renders a login form, consisting of a `form` element with two child elements:
//   - A `div` element with two child elements that display headings for the login form.
//   - Another `div` element with input fields for the username and password, and a button to submit the form and login. The `value` and `onChange` props of the `input` elements are used to bind the `name` and `pwd` state variables to the input fields, so that the component's state is updated when the user enters values in the fields.
//     - The `button` element contains a `NavLink` component that redirects the user to the `Dashboard` component when clicked. The `navigate` function is used to specify the URL of the `Dashboard` component.
// - Finally, the `Home` component is exported as the default export of the module so that it can be imported and used in other parts of the application.