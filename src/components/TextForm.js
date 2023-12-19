
import React, {useState} from 'react'



export default function TextForm(props) {
    const clickme=(event)=>{
        event.preventDefault();
        let newtext= text.toUpperCase();
        settext(newtext)
    }
    const handleonchange=(event)=>{
       
        settext(event.target.value);
    }

    const [text, settext] = useState();

  return (
<><form>
<div className="mb-3">
<h1>{props.heading}</h1>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Text to analyze below</label>
  <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
</form>

<div className='container my-3'>
    <h1>Your Text Summary</h1>
    {text && (
        <>
            <p>{text.split(" ").filter(Boolean).length} Words and {text.length} Characters</p>
            <p>It will take{0.008 * text.split(" ").filter(Boolean).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </>
    )}
</div>

</>
  )
}
