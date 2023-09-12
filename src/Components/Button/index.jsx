import React from 'react';



function Button({children, onClick, size, color, isRounded}) {
    const defaultColor = 'rgb(38, 166, 154)'
  return <a onClick={
    ()=>{onClick()}}
  style={{backgroundColor:color? color:defaultColor, borderRadius: isRounded? '10px': '0px'}}  className={`waves-effect waves-light btn-${size? size:'small'}`}>{children}</a> 
  }

export default Button;