import React, { useState } from "react";

const Header = () =>{
    const [show,setShow] = useState(false);
    const [tooltip,setTooltip] = useState("");
    const showTooltip = (tooltip) =>{
        setShow(true)
        setTooltip(tooltip)
    };
    const hideTooltip = () => {
        setShow(false)
    }
    return(
        <>
        <div style={{backgroundColor: "lightblue"}}>
          {show ? <p>{tooltip}</p> : "heloo"}
        </div>
        <div style={{margin: "10px"}}> <button onMouseOver={() =>showTooltip("Hello , Im button 1")} onMouseOut={hideTooltip}>BUTTON 1</button></div>
        
        <div style={{backgroundColor: "red", margin:"10px",height:"35px"}}><button style={{backgroundColor: "yellow", display:"flex", justifyContent:"center",height:"25px"}} onMouseOver={() =>showTooltip("Hello , Im button 2")} onMouseOut={hideTooltip}>BUTTON 2</button></div>
        </>
    )
}

export default Header;