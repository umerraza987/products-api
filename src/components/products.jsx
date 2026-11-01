import React, { useEffect, useState } from 'react'
import { getProctsById, getProducts } from '../api/product'
import { TbDeviceWatchFilled,TbDeviceWatchCancel } from "react-icons/tb";
import "./products.css"

const Products = () => {
  let [products, setProducts] = useState([])
  let [productId,setProductId] = useState("")
  let [productName,setProductName] = useState("")

  

  useEffect(() => {
    fetchProducts()

  }, [])
  useEffect(() => {
    if (productId!=""&& productId!=0) {
      if (productId >20) {
        alert("this id doesnot exist")
      }else{
        fetchProductsById()

      }
      
    }else{
      fetchProducts()
    }


  },[productId] )

  useEffect(()=>{
    filterProductsByName()
  },[productName])

  const fetchProducts = async () => {
    const data = await getProducts()
    console.log(data.data);
    setProducts(data.data)
    
  }
  const fetchProductsById= async () => {
    const data = await getProctsById(productId)
    console.log(data);
    setProducts([data])
    
  }
  
  const filterProductsByName = async()=>{
    const data = await getProducts()
    console.log(productName);
    
    const filteredProduct = data.data.filter((v)=> v.title.toLowerCase().includes(productName.toLowerCase()) || v.brand.toLowerCase().startsWith(productName.toLowerCase()))
    console.log(filteredProduct);
    setProducts(filteredProduct)
    
    
  }
  
  return (
    <div>
      <TbDeviceWatchFilled size={60} color='blue'/>
      <TbDeviceWatchCancel size={60} color='red'/>
      <h1>Products Card</h1>
      <input type="text" placeholder='Enter Product id' onChange={(e)=>{setProductId(e.target.value)}} />
      <br />
      <input type="text" placeholder='Enter Product Name' onChange={(e)=>{setProductName(e.target.value)}} style={{marginBlock: "20px",}} />
      
      <div className='main-div'>
        {
          products.map((v, i) => {
            return (
              <>
                <div className="product-card-short" key={i.id}>
                  <img src={v.image} alt={v.title} className="card-img" />

                  <div className="card-content">
                    <span className="brand">{v.brand}</span>
                    <h4 className="title" title={v.title}>{v.title}</h4>
                    <p className="desc" title={v.description}>{v.description}</p>

                    <div className="card-footer">
                      <span className="price">{v.price}$</span>
                      <button
                        className="cart-btn"
                        // onClick={onAddToCart}
                        aria-label={`Add ${v.title} to cart`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )

          })
        }
      </div>
    </div>

)
}

export default Products