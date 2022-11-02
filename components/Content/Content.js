import React from "react";
import { useEffect, useState} from "react";
import Productone from "../ProductInfo";
import './Content.css';

const Content=()=>{
  const [product, setProduct] = useState("selecttheProduct");
  const [products,setProducts]=useState([]);
  const [productoneContentVisible, setProductoneContentVisible] = useState(false);
  const [prodid,setProdId]=useState(0);
 
  useEffect(() => {
  product === "selecttheProduct" ?   setProductoneContentVisible(false) : setProductoneContentVisible(true);
  
  const getAllBidsOfProduct = async () => {
    
      const url = "http://localhost:8081/e-auction/api/v1/seller/show-bid";
     
          const response = await fetch(url);
          const data = await response.json();
          console.log(data);
          setProducts(await data)
    }
    getAllBidsOfProduct();

  }, [product]);


  const handleOnChange = (e) => {
    
    setProduct(e.target.value);
    setProdId(e.target.value);
    
    
   
  };

const handleOnChangeClear = (e)=>{
  setProductoneContentVisible(false);
    setProduct("selecttheProduct");
   
    
}

return(
    <>
    <table className="Table1">
        <tr>
          <th>Product</th>
          <td><select className="form-select" value={product} onChange={handleOnChange}>
           <option value="selecttheProduct" >Select any product</option>
           {
               products.map((prod)=>{
                return  <option value={prod[0]}>{prod[1]} </option>
                
              })
          }
         </select></td>
          <th><a href="eauction" onChange={handleOnChange}>Search</a></th>
          <td><button  onClick={handleOnChangeClear}>Clear</button></td>
        </tr>
        </table>
        <br></br>

 { productoneContentVisible && <Productone pid={prodid} /> }
   {/*{ producttwoContentVisible && <Producttwo /> }
  { productthreeContentVisible && <Productthree /> }*/}
    </>

)
}
export default Content;
