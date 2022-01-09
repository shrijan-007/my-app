import React from 'react'

 function Navbar(props) {
    
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.pMode} bg-${props.pMode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"> <i className="bi bi-card-text"></i> Texty</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height" : "100px;"}}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item d-flex align-items-center px-2">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode}/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{color:props.eleStyle}}>Dark mode</label>
                            </div>
                         
                        </li>
                    </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit"><i className="bi bi-search"></i></button>
                </form>
                </div>
            </div>
        </nav>
        </>
    );
 }
 export default Navbar;