import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Singup from './Singup';
import Login from './Login';
import './App.css';
import { Edit } from './Edit';


function App() {
  return (
    <div>
     <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Singup/>}/>
      <Route path='Login'element={<Login/>}/>
      
    
    </Routes>
   
    </BrowserRouter>
    </div>
  );
}

export default App;








