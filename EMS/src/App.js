import './App.css';
import Dashboard from './Page/Dashboard';
import {Routes,Route} from 'react-router-dom'
// import Home from './Home'
function App() {
  return (
    <div>
    {/* <Home/> */}
    
    <Routes>
      
      <Route exact path='/dashboard' element={<Dashboard/>}/>
    </Routes>
        
    </div>
  );
}

export default App;
