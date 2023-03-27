import React from "react";
import { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpeerCaseClick=()=>{
       // console.log("uppercase is clicked")
        let newText = text.toUpperCase()
        setText(newText)

    }
    const handleLowerCaseClick = ()=>{
        let newText = text.toLocaleLowerCase()
        setText(newText)
    }
    const handleClearText = () =>{
      let newText = ""
      setText(newText)
    }
    const handleOnChange = (e)=>{
       // console.log("state changing")
        setText(e.target.value)
    }
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
        onChange={handleOnChange}
        value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpeerCaseClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text Area</button>
    </div>
    <div className="container my-3">
        <h4>Your Text Summary</h4>
        <p> {text.split(" ").length} Words {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} Minutes Read</p>
        <h5>Preview</h5>
        <p>{text.length>0?text:"Enter something to textbox above to preview "} </p>
    </div>
    </>
  );
}
