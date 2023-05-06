import React from "react";
import '../styles/Spinner.css'


// Este espinner fué hecho con ayuda de loading.io/css
const Spinner =()=>{


    return(  
    <>

      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </>
  )
}

export default Spinner;