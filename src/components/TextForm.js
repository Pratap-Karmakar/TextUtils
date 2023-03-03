
import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');

  // to set the text to upper case
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upper-case","success")
  }

  // to set the text to lower case
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower-case","success")
  }

  // to clear the text
  const handleClearText = () => {
    setText('');
    props.showAlert("text cleared","success")
  }
  // to copy the text
  const handleCopyText = () => {
    let newText = document.getElementById('myBox');
    newText.select();
    navigator.clipboard.writeText(newText.value);
    // after copy the text will still all selected to deselected the text automatically
    document.getSelection().removeAllRanges();;
    props.showAlert("Text copied","success")
  }
  /// to remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("removed extra spaces using split fnction","success")
  }

  const removeReplaceSpace = () => {
    setText(text.replace(/\s+/g, ' '))
    props.showAlert("removed extra spacess using replace function","success")
  }

  // to edit the textarea
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className={`text-${props.textColor}`}>

      <div className='mb-3'  >
        <h2 className='mb-4'>{props.heading}</h2>
        <div>
          {/* backgorund color change can be possible by using props as well but in that case we can use only the background colors given by bootstrap only */}
          {/* <textarea className={`form-control text-${props.textColor} bg-${props.textAreaBackground}`} id='myBox' rows="5" value={text} onChange={handleOnChange}></textarea> */}
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <div className='my-3'>

        {/* disabled={text.length===0} means if the text area is empty the the buttons will be disabled */}

          <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick} disabled={text.length===0}>Convert to UpperCase</button>

          <button className='btn btn-primary mx-1 my-1' onClick={handleLowerClick} style={{ marginLeft: 4 }} disabled={text.length===0}>Convert to LowerCase</button>

          <button className='btn btn-primary mx-1 my-1' onClick={handleClearText} style={{ marginLeft: 4 }} disabled={text.length===0}>Clear text</button>

          <button className='btn btn-primary mx-1 my-1' onClick={handleCopyText} style={{ marginLeft: 4 }} disabled={text.length===0}id="copy">Copy text</button>

          <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces} style={{ marginLeft: 4 }} id="copy" disabled={text.length===0}>Remove Extra Spaces Split</button>

          <button className='btn btn-primary mx-1 my-1' onClick={removeReplaceSpace} style={{ marginLeft: 4 }} id="copy" disabled={text.length===0}>Remove Extra Spaces Replace</button>
        </div>
      </div>

      <div className='my-4'>
        <h2>Your text summary</h2>
        {/* as we've added the filter function so that split function doesn't count the space as a word */}
        <h4>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</h4>
        {/* as we've added the filter function so that split function doesn't count the space as a word */}
        <h5>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minuits to read</h5>
        <h3 className='my-4'>Preview</h3>
        {/* it means if text.length>0 if true means there is something already in the above textarea then preview the {text} or if it's false means there is nothing in the above textarea then show the "massage" */}
        {/* here '?' means then ':' means or  */}
        <p className='my-2'>{text.length > 0 ? text : "Nothing to prewview"}</p>
      </div>
    </ div>
  )
}
