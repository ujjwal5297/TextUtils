import React, { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upperCase was Clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = () => {
    // console.log("upperCase was Clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleClearClick = () => {
    // console.log("upperCase was Clicked" + text)
    let newText = "";
    setText(newText)
    // console.log(setText)
  }


  const handleOnChange = (event) => {
    // console.log("On Change")
    setText(event.target.value)
  }

  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const [text, setText] = useState("");
  // text= "new text", Wrong way to change the state
  // setText("new text"); correct way to change the state





  return (
    <>
      <div className="Container" style={{ color: props.mode === 'dark' ? 'white' : 'black ' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black ' }} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


      </div>
      <div className="Container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black ' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}  minutest to read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Enter something in the textbox above to preview it here"}</p>
      </div>


    </>
  )
}

