import React, {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick = () => {
        console.log("upper case clicked");
        let newText = text.toUpperCase(); 
        setText(newText);
    }
    const handleLowClick = () => {
        console.log("upper case clicked");
        let newText = text.toLowerCase(); 
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("on change")
        setText(event.target.value)
    } 
    
    const [text, setText] = useState('enter min 5 lines');
//   text = "Next Line"; Wrong way to change the text.
//   setText("enter text here");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="5"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
