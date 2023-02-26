
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light')

  const [toggleText, setToggleText] = useState('Dark Mode');

  const [textColor, setTextColor] = useState('black')

  const [textAreaBackground, setTextAreaBackground] = useState('light');

  // const [alert, setAlert] = useState(null);


  const toggleSwitch = () => {
    if (mode === 'light') {
      setMode('dark');
      setToggleText('Light Mode');
      setTextColor('white');
      document.body.style.backgroundColor = '#072c50';
      // bootstrap backgound color class name
      setTextAreaBackground('secondary');
      // we need to call the showAlert function here and pass it's two arguments message and type  to show an alert while dark mode is enabled
      showAlert("Dark mode has been enabled!","success");
    }
    else {
      setMode('light');
      setToggleText('Dark Mode')
      setTextColor('black')
      document.body.style.backgroundColor = 'white'
      setTextAreaBackground('light');
      // we need to call the showAlert function here and pass it's two arguments message and type to show an alert while light mode is enabled
      showAlert("Light mode has been enabled!","success");
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
      <Alert alert={alert}/>
      {/* <Navbar/> */}
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze below..." textColor={textColor} textAreaBackground={textAreaBackground} showAlert={showAlert}/>
        {/* <About heading="About Us"/> */}
      </div>

    </div>
  );
}

export default App;
