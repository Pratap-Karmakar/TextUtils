
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode]=useState('light')

  const [toggleText,setToggleText]=useState('Dark Mode');

  const [textColor, setTextColor]= useState('black')

  const [textAreaBackground, setTextAreaBackground] =useState('light');

  const toggleSwitch=()=>{
    if(mode==='light'){
      setMode('dark');
      setToggleText('Light Mode');
      setTextColor('white');
      document.body.style.backgroundColor= '#072c50';
      // bootstrap backgound color class name
      setTextAreaBackground('secondary');
    }
    else{
      setMode('light');
      setToggleText('Dark Mode')
      setTextColor('black')
      document.body.style.backgroundColor='white'
      setTextAreaBackground('light');
    }
  }

  return (
    <div className="App">

      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleSwitch={toggleSwitch} toggleText={toggleText} textColor={textColor}/>
      {/* <Navbar/> */}
      <div className='container my-3'>
      <TextForm heading="Enter the text to analyze below..." textColor={textColor} textAreaBackground={textAreaBackground} />
      {/* <About heading="About Us"/> */}
      </div>
    
    </div>
  );
}

export default App;
