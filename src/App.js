import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Carditems from './Cartitems';
import { useState } from 'react';

// import State from './State';



function App() {
 let product =[
   {
     id:1,
     name:"i-phone",
     price:70000,
     img:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022175704"
   },
   {
    id:2,
    name:"ReaLMe",
    price:30000,
    img:"https://fdn2.gsmarena.com/vv/pics/realme/realme-6-1.jpg"
  },
  {
    id:3,
    name:"ReaLMe X2",
    price:20000,
    img:"https://www.gizbot.com/images/2020-01/realme-x2_157900146090.jpg"
  },
 ]
 
 const[Cartitems,setItems]=useState([])
const [total,settotal]=useState(0);
 let showprice=(data)=>{
  setItems([...Cartitems,data])
  settotal(total+ data.price); 
}
let removeItems=(item)=>{
  let ind =Cartitems.findIndex(cartitem=> cartitem.id===item.id)
  Cartitems.splice(ind,1);
  setItems([...Cartitems])
  settotal(total - item.price);
}
  return (
    <>
    {/* <State></State> */}
    <div className="container-fluid">
      <div className="row">
        <div className='col-lg-10'>
          <div className='row mr-20' > 
          {
            product.map((value)=>{
               return <Product pricedata={showprice} pdata={value}></Product>
            })
          }
           
        </div>
        </div>
        <div className='col-lg-2'>
          <h2>Cart Items({Cartitems.length})</h2>
          <ol class="list-group list-group-numbered">
          {
            Cartitems.map((items)=>{
                return <Carditems remove={removeItems} item={items}></Carditems>
            })
          }
          </ol>
          <h2>Total : {total} </h2>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
