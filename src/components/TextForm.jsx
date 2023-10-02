import React, { useState } from 'react'


function TextForm() {
    const [text, setText] = useState('');
    const handleOnChange =(event) => {
        // console.log("on change")
        setText(event.target.value)
    }
    return (
        <div className="container">
        <div className="mb-3 my-5">
                <label htmlFor="myBox" className="form-label"><h2>WordCounter</h2></label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <p>{text.split(" ").filter((element) =>{return element.length!==0}).length} words</p>
            </div>
    )
}

export default TextForm
