// import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
// import img1 from "../../../ASSETS/img1.jpg"
// import img2 from "../../../ASSETS/LOGO-HomeTek.png"

const ProductDetailPage = () => {
  const {prodid} = useParams()
  
  return (
    <div>
    <h1> product is - {prodid}  
    </h1>

    </div>
    // video 5,6,7
  )
}

export default ProductDetailPage