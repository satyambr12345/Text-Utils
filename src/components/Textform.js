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
      <button className="btn btn-primary" onClick={handleOnclick}>Convert to UpperCase</button>
      <button className="btn btn-secondary mx-4" onClick={handleClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-4" onClick={handle}>Replace</button>
    </div>
    <div className={`container my-4 text-${props.color}`}>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} Words and {text.length} Characters </p>
      <p>{0.008 * text.split(" ").length} Minutes Reqiured to Read. </p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Write Something in the above textbox to preview it here."}</p>
    </div>
    </>
  )
}
