
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Textform from './components/Textform';
import Navbar from './components/Navbar';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  const [mode, setMode]=useState('light');
  const removeClasses=()=>
  {
      document.body.classList.remove('bg-dark');
      document.body.classList.remove('bg-light');
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-warning');
      document.body.classList.remove('bg-danger');
  }
  const toggleMode=(cls)=>
  {
    removeClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light')
    {
      setMode('dark');
      toggleAlert("Dark Mode has been enabled", "success");
      document.body.style.backgroundColor='grey';
      // document.title="TextUtils-Dark Mode"
    }
    else{
      setMode('light');
      toggleAlert("Light Mode has been enabled", "success");
      document.body.style.backgroundColor='white';
      // document.title="TextUtils-Light Mode"
    }
  }
  const toggleAlert=(message,type)=>
  {
     setAlert(
      {
        msg:message,
        type:type,

      }
     )
     setTimeout(() => {
      setAlert(null);
     },1500);
  }
  const [alert,setAlert]=useState(null);
  return (
    <>
    <Router>
    <Navbar title="TextUtils_Blog" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<Textform  toggleAlert={toggleAlert} heading="Enter the text to analyze"/>}></Route>
    </Routes> 
    {/* {<Textform  toggleAlert={toggleAlert} heading="Enter the text to analyze"/>} */}
    </div>
     </Router>

    </>
  );
}

export default App;
