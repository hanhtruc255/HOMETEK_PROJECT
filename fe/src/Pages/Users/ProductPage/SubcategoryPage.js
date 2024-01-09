import React, {useState} from 'react'
import CategorySidebar from '../../../Components/Products/CategorySidebar';
import Navbar from '../../../Components/Navbar/Navbar';
import "./styleproductpage.scss"
import Breadcrumb from '../../../Components/Breadcrumb/Breadcrumb';
import Sort from '../../../Components/Products/Sort';
import SubCategoryProduct from '../../../Components/Products/Sub_Category';


const SubCategoryPage = () => {
  const [currentSort, setCurrentSort] = useState("default");
  const [filteredBrands, setFilteredBrands] = useState(new Set());
  const [selectedPrice, setSelectedPrice] = useState(null);

  const handleSortChange = (selectedSort) => {
    setCurrentSort(selectedSort);
  };

  const handleFilterChange = (selectedBrands) => {
    setFilteredBrands(selectedBrands);
  };

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };


  return  (
  <div>
    <Breadcrumb/>
    <Sort onSortChange={handleSortChange} />
    <div  className="Frame_Product">
      <CategorySidebar 
          onFilterChange={handleFilterChange}
          onPriceChange={handlePriceChange}/>
      <SubCategoryProduct
          sortCriteria={currentSort}
          filteredBrands={filteredBrands}
          selectedPrice={selectedPrice}/>
    </div>
  </div>
)
}

export default SubCategoryPage