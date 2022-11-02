import React, { useEffect, useState} from "react";
import './ProductInfo.css';
 const ProductInfo=(props)=>{
  
  const [product,setProduct]=useState(new Object());

  useEffect(() => {
  
    const handleSearch = async (productid) => {
      
      const url = `http://localhost:8081/e-auction/api/v1/seller/show-bids/${productid}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
          console.log(data);
          setProduct(data);
        
            
      } catch (e) {
        //console.log(e);
    }}
    handleSearch(props.pid);
  },[props.pid])

return(
  <>
  
    <div className="Product">
    
        <table>
          
            <tr>
            <th>Product Name</th>
            <td >{product.productName}</td>
          </tr>
          <tr >
          <th>Short Description</th>
          <td >{product.shortDescription}</td>
        </tr>
       
        <tr >
          <th>Detailed Description</th>
          <td >{product.detailedDescription}</td>
        </tr>
      
        <tr >
          <th>Category</th>
          <td >{product.category}</td>
        </tr>
        
        <tr >
          <th>Starting Price</th>
          <td >{product.startingPrice}</td>
        </tr>
        
        <tr >
          <th>Bid End Date</th>
          <td >{product.bidEndDate}</td>
        </tr>
        </table>
        </div>
      <div className="bid"><h3>BIDS FOR THE PRODUCT</h3></div>
      <div className="table2">
      <table>
        <tr >
          <th>Bid Amount</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
        </tr>
        {product.byerInfoDto?.map(prod=>{
          return(
            <tr>
            <td>{prod.bidAmount}</td>
            <td>{prod.firstName} {prod.lastName}</td>
            <td><a href='\'>{prod.email}</a></td>
            <td> {prod.phone}</td>
          </tr>
          )
        })} 
        
      </table>
    </div>
  </>
)
}
export default ProductInfo;
