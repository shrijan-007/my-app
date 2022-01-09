import React from 'react'
function Textarea(props) {
    return(
        <>
        <div style={props.eleStyle}>
        <h1 className='container' style={props.eleStyle}>
            {props.heading}
        </h1>
        <div className="container mb-3 py-3" style={props.eleStyle}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label"><i className="bi bi-dash-circle"></i> Enter your text here to preview it</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" style={props.eleStyle}></textarea>
        </div>
        <div className='container py-2'>
        <button type="button" class="btn btn-primary">Capitalize</button>
        <button type="button" class="btn btn-primary ms-3">Uncapitalized</button>
        <button type="button" class="btn btn-primary ms-3">Capitalize</button>


        </div>
        </div>
        </>
    );
}
export default Textarea;