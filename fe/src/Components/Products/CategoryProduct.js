// // ProductList.js
// import React, {useParams, useState, useEffect} from 'react';
// import {activeTab} from "../Navbar/Navbar";
// import axios from 'axios';

// const CategoryProduct = () => {
//     const [product, setProduct] = useState(null);  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(`https://dummyjson.com/products/catogory/smartphones`);
//           setProduct(response.data);
//         } catch (error) {
//           console.error('Error fetching product details:', error);
//         }
//       };
  
//       fetchData();
//     }, [category]);


//   return (
//     <div>
      
//     </div>
//   );
// };

// export default CategoryProduct;
