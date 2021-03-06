import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alerts from "./components/Alerts";
import About from './components/About'
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert('Light Mode Has Been Enabled', 'success')
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(70, 69, 69)'
      document.body.style.color = '#f5f5f5'
      showAlert('Dark Mode Has Been Enabled', 'success')
    }
  }
  const [mode, setMode] = useState('light')
  return (
    <>
      <Router>
        <Navbar title="Textutils" abouttext="About textutils" mode={mode} toggleMode={toggleMode} />
        <Alerts alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route> 
              <Route path="/"> 
              <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra characters" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch> 
        </div>
      </Router>
    </>
  );
}

export default App;
