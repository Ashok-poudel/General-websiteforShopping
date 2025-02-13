//import React from 'react'
import productList from "./Data";
import toast, { Toaster } from 'react-hot-toast';

const Home = ({setProductId}) => {
//   const data =  {
//     id:8,
//     img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/f/2/y27-v2249-vivo-original-imahfmkqf5mrugjq.jpeg?q=70",
//     model:'Vivo Y27',
//     brand:'Vivo',
//     price:16770,
//     space:'8 GB RAM | 128 GB ROM',
//     camera:'50MP + 2MP | 8MP Front Camera',
//     battery:'5000 mAh Battery',
//     count:1,
//     isAdded:false,
//     type:'Mobile',   
//     isTrending:false,
//     description:"1 Year Manufacturer Warranty for Phone and 6 Months Warranty for in the Box"
// }
     const handleAddToCart =( id )=>{
    
      setProductId(id);
      toast.success('Product addded sucessfully!!');
     }
   
  return (
   <div className="container-fluid px-5 mt-5">
    <div className="row gap-5 justify-content-center">
      <Toaster/>
       {
        productList?.map((product,index) => {
          // console.log("product",product)
          return(
        <div className="col-2 border rounded mt-2"key={product.id}>
      <div className="d-flex justify-content-center p-2">
        <img src={product?.img} alt="" className="product-size"/>
      </div>
      <div>
      <div className="d-flex justify-content-between px-2">
        <p className="m-0 font-bold font-size-12"  >{product?.brand}</p>
        <p className="m-0 font-bold font-size-12">{product?.model}</p>
      </div> 
      <div className="px-2">
        <p className="m-0 "><span className="font-bold"></span>₹{product?.price}</p>
        <p className="m-0 text-hiding">{product?.space}</p>
      </div>
      <div className="px-2 mt-3">
        <button className="btn btn-primary p-1 w-100" onClick={()=>handleAddToCart(product?.id)} > Add to cart</button>
      </div>
      </div>
    </div>
          )
        })
       }
    {/* <div className="col-2 border rounded">
      <div className="d-flex justify-content-center p-2">
        <img src={data?.img} alt="" className="product-size"/>
      </div>
      <div>
      <div className="d-flex justify-content-between px-2">
        <p className="m-0 font-bold" >{data?.brand}</p>
        <p className="m-0 font-bold">{data?.model}</p>
      </div> 
      <div className="px-2">
        <p className="m-0 "><span className="font-bold"></span>₹{data?.price}</p>
        <p className="m-0 text-hiding">₹{data?.space}</p>
      </div>
      <div className="px-2 mt-3">
        <button className="btn btn-primary p-1 w-100">Add to cart</button>
      </div>
      </div>
    </div> */}
    </div>
   </div>
  )
}

export default Home