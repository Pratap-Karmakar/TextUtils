import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

import { Routes, Route } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light')

  const [toggleText, setToggleText] = useState('Light Mode');

  const [textColor, setTextColor] = useState('black')

  const [textAreaBackground, setTextAreaBackground] = useState('light');

  // const [alert, setAlert] = useState(null);


  const toggleSwitch = () => {
    if (mode === 'light') {
      setMode('dark');
      setToggleText('Dark Mode');
      setTextColor('white');
      document.body.style.backgroundColor = '#070c50';
      // bootstrap backgound color class name
      setTextAreaBackground('secondary');
      // we need to call the showAlert function here and pass it's two arguments message and type  to show an alert while dark mode is enabled
      showAlert("Dark mode has been enabled!", "success");
      document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title="Install TextUtils Now"
      // }, 2000);
      // setInterval(() => {
      //   document.title="TextUtils is Amazing"
      // }, 1500);
    }
    else {
      setMode('light');
      setToggleText('Light Mode')
      setTextColor('black')
      document.body.style.backgroundColor = 'white'
      setTextAreaBackground('light');
      // we need to call the showAlert function here and pass it's two arguments message and type to show an alert while light mode is enabled
      showAlert("Light mode has been enabled!", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }

  //////////// alert

  const [alert, setAlert] = useState(null);
  // this type argument is for the bootstrap types and msg will pass the message
  // this two argument's values are passed in the above if-elase function
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    // to remove the alter afte a certian time
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <div className="App">

      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleSwitch={toggleSwitch} toggleText={toggleText} textColor={textColor} />
      <Alert alert={alert} />
      
      <div className='container my-3'>
      <Routes>
        <Route exact path='/' element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces, Uppercase to Lowercase, Lowercase to Uppercase" textColor={textColor} textAreaBackground={textAreaBackground} showAlert={showAlert} mode={mode} />} />
        <Route exact path="/about" element={<About heading="About Us" mode={mode}/>} />
      </Routes>
      </div>

    </div>
  );
}

export default App;