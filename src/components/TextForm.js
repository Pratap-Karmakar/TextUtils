
import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');

  // to set the text to upper case
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  // to set the text to lower case
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  // to clear the text
  const handleClearText = () => {
    setText('');
  }
  // to copy the text
  const handleCopyText = () => {
    let newText = document.getElementById('myBox');
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }
  /// to remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  const removeReplaceSpace=()=>{
    setText(text.replace(/\s+/g, ' '))
  }

  // to edit the textarea
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className={`text-${props.textColor}`}>
    
      <div className='mb-3'  >
        <h1>{props.heading}</h1>
        <div>
          {/* backgorund color change can be possible by using props as well but in that case we can use only the background colors given by bootstrap only */}
          <textarea className={`form-control text-${props.textColor} bg-${props.textAreaBackground}`} id='myBox' rows="5" value={text} onChange={handleOnChange}></textarea>
          {/* <textarea className={`form-control text-${props.textColor}}`} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} id='myBox' rows="5" value={text} onChange={handleOnChange}></textarea> */}
        </div>
        <div className='my-3'>
        <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary' onClick={handleLowerClick} style={{marginLeft:4}}>Convert to LowerCase</button>
        <button className='btn btn-primary' onClick={handleClearText} style={{marginLeft:4}}>Clear text</button>
        <button className='btn btn-primary' onClick={handleCopyText} style={{marginLeft:4}} id="copy">Copy text</button>
        <button className='btn btn-primary' onClick={handleExtraSpaces} style={{marginLeft:4}} id="copy">Remove Extra Spaces Split</button>
        <button className='btn btn-primary' onClick={removeReplaceSpace} style={{marginLeft:4}} id="copy">Remove Extra Spaces Replace</button>
        </div>
      </div>

      <div className='my-4'>
        <h2>Your text summary</h2> 
        <h4>{text.split(" ").length} Words and {text.length} Characters</h4>
        <h5>{0.008 * text.split(" ").length} Minuits to read</h5>
        <h3 className='my-4'>Preview</h3>
        {/* it means if text.length>0 if true means there is something already in the above textarea then preview the {text} or if it's false means there is nothing in the above textarea then show the "massage" */}
        {/* here '?' means then ':' means or  */}
        <p className='my-2'>{text.length>0?text:"Type something in the above textarea to preview it here!"}</p>
      </div>
    </ div>
      )
}
