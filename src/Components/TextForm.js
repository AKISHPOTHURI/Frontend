import React, {useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick = () => {
        // console.log("upper case clicked");
        let newText = text.toUpperCase(); 
        setText(newText);
    }
    const handleLowClick = () => {
        // console.log("upper case clicked");
        let newText = text.toLowerCase(); 
        setText(newText);
    }
    const handleClearClick = () => {
        // console.log("upper case clicked");
        let newText = ''; 
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("on change")
        setText(event.target.value)
    } 
    
    const [text, setText] = useState('');
//   text = "Next Line"; Wrong way to change the text.
//   setText("enter text here");
    return (
        <>
            <div className="container" style={{color : props.mode === 'light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'light'?'white':'grey',color : props.mode === 'light'?'black':'white'}} id="mybox" rows="5"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-2" style={{color : props.mode === 'light'?'black':'white'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0?text:'Enter text above box to preview it here.'}</p>
            </div>
        </>
    )
}
