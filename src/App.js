
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)},3000
    )
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
   <>
    <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className='container'>
      <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
    </div>  
  </>
  );
}

export default App;
