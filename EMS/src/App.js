import './App.css';
import Dashboard from './Page/Dashboard';
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
function App() {
  return (
    <div>
    <Home/>
    
    <Routes>
      
      <Route exact path='/dashboard' element={<Dashboard/>}/>
    </Routes>
        
    </div>
  );
}

export default App;
//This is a JavaScript file that defines a functional component called `App`. The component returns a JSX expression that renders a `Home` component and a `Dashboard` component using React Router.

// Here's a breakdown of the code:

// - The first line imports a CSS file called `App.css`.
// - The second line imports a component called `Dashboard` from a file located at `'./Page/Dashboard'`.
// - The third line imports two components, `Routes` and `Route`, from the `react-router-dom` package.
// - The `App` component returns a JSX expression that contains a `div` element with two child components:
//   - The `Home` component, which is rendered using the self-closing JSX syntax.
//   - A `Routes` component, which is used to define the routes for the application.
//     - Within the `Routes` component, there is a `Route` component that defines a route for the `/dashboard` path. The `exact` prop ensures that the route only matches the exact path, and the `element` prop specifies that the `Dashboard` component should be rendered when the route is matched.
// - Finally, the `App` component is exported as the default export of the module so that it can be imported and used in other parts of the application.