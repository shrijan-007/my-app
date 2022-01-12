import React,{useState} from 'react'
function Textarea(props) {
    const [textfrm, setTextfrm] = useState('');
    const getVal = (e)=>{
        setTextfrm(e.target.value);
    }
    const setCaps = ()=>{
        setTextfrm(textfrm.toUpperCase());
    }
    const setNocaps = ()=>{
        setTextfrm(textfrm.toLowerCase());
    }
    return(
        <>
        <div style={props.eleStyle}>
        <h1 className='container' style={props.eleStyle}>
            {props.heading}
        </h1>
        <div className="container mb-3 py-3" style={props.eleStyle}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label"><i className="bi bi-dash-circle"></i> Enter your text here to preview it</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" style={props.eleStyle} value={textfrm} onChange={getVal}></textarea>
        </div>
        <div className='container py-2'>
        <button type="button" class="btn btn-primary" onClick={setCaps}>Capitalize</button>
        <button type="button" class="btn btn-primary ms-3" onClick={setNocaps}>Uncapitalized</button>
        </div>
        </div>
        <div style={props.eleStyle}>
        <div className="container py-1" >
        <h3>
            Preview ({textfrm.split(" ").length} words and {textfrm.length} characters: )
        </h3>
        <div>
            <p>
                {textfrm}
            </p>
        </div>
        </div>
        </div>
        </>
    );
}
export default Textarea;