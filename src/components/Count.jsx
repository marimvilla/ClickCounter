import React from "react";
import '../stylesheets/Count.css'

function Count({ numClick }){
  return(
    <div className="counter">
        {numClick}
    </div>
  );
}

export default Count