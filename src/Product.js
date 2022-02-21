import React from "react";

function Product(props){
    return(
    <div className="col-lg-3 mr-3">
    <div className="card" style={{width: '23rem'}} >
    <img src={props.pdata.img} class="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.pdata.name}</h5>
      <h6>{props.pdata.price}</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <button onClick={()=>props.pricedata(props.pdata)} className="btn btn-primary">Add to cart</button>
    </div>
    </div>
    </div>
    )
}

export default Product;