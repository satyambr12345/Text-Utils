import React, { useState } from 'react'
import './Textform.css';

export default function Textform(props) {
  const handleOnclick = () => {
    console.log("UpperCase was Clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.toggleAlert("Converted to Uppercase", "success");
  }
  const handleOnchange = (event) => {
    console.log("On Chnage");
    setText(event.target.value);
  }
  const handleClick= () =>
  {
    let newText2=text.toLowerCase();
    setText(newText2);
    props.toggleAlert("Converted to Lowercase", "success");
  }
  const handle=() =>
  {
    let newText3=text.replace(text,"Hello Buddy");
    setText(newText3);
  }
  const Oncopy=()=>
  {
    navigator.clipboard.writeText(text);
    props.toggleAlert("Copied to clipboard","success");
  }
  const [text, setText] = useState("");
  // text="dhaksdlflskhkfd"  //Wrong way to update it.
  // setText("New Text");      
  return (
    <>
    <div className={`container text-${props.color}`}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className={`form-control `} value={text}  onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnclick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-secondary mx-2 my-1" onClick={handleClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handle}>Replace</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={Oncopy}>Copy to Clipboard</button>
    </div>
    <div className={`container my-4 text-${props.color}`}>
      <h3>Your Text Summary</h3>
      <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters </p>
      <p>{0.008 * text.split(/\s/).filter((element)=>{return element.length!==0}).length} Minutes Reqiured to Read. </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview."}</p>
    </div>
    </>
  )
}
