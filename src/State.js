import React from "react";
import {useState} from 'react';
function State(){
    const [counter,setcount]=useState(0);
    return(
        <div class="main" style={{textAlign:'center'}}>
          <h2>State</h2>
      <buttton onClick={()=>setcount(counter+1)}>+</buttton>
      <p>{counter}</p>
      <buttton onClick={()=>setcount(counter-1)}>-</buttton>
      </div>
    )
}

export default State