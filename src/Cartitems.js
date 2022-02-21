import React from "react";

function Carditems (props){
    return(
    
    <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{props.item.name}</div>
        {props.item.price}
      </div>
      <button onClick={()=>props.remove(props.item)}  class="badge bg-primary rounded-pill">Remove</button>
    </li>
  
  )
}

export default Carditems;