import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   HashRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import Copyright from './components/Copyright';

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      
    }
  }
  return (
    <>
     <HashRouter>
     <Navbar title="TextAnalyzer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
    <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}></Route>
      <Route path="/Textanalyzer/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}></Route>
      <Route path="/about" element={<About mode={mode} />}></Route>
    </Routes>
    <Copyright/>
  </HashRouter>
    </> 
  );
}

export default App;

