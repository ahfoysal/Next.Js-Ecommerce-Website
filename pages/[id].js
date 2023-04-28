import React, { useState, useEffect, lazy } from "react";
import { FaTh, FaBars } from 'react-icons/fa';
import CardProductGrid from "../components/card/CardProductGrid";
import CardProductList from "../components/card/CardProductList";
import SortBy from "../components/filter/SortBy";
import axios from "axios";
const FilterCategory = lazy(() => import("../components/filter/Category"));
const FilterPrice = lazy(() => import("../components/filter/Price"));


function CategoryPage({ data }) {

  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState("grid");
  const [availableCategories, setAvailableCategories] = useState([]);

 

  useEffect(() => {
    const categoryObjects = [];
  
    data?.forEach(product => {
      if (product.categories) {
        product.categories.forEach(category => {
          const existingCategory = categoryObjects.find(obj => obj.id === category.id);
          if (existingCategory) {
            // Category already exists in the array, update its name and slug (if necessary)
            if (existingCategory.name !== category.name) {
              existingCategory.name = category.name;
            }
            if (existingCategory.slug !== category.slug) {
              existingCategory.slug = category.slug;
            }
          } else {
            // Category doesn't exist in the array, add it
            categoryObjects.push({
              id: category.id,
              name: category.name,
              slug: category.slug,
            });
          }
        });
      }
    });

    setAvailableCategories(categoryObjects);



    if (data) {
      setProducts(data)
    
    
     
      setProducts(data);
      setDetails(data)
      setIsLoading(false);
      
    }
    
  }, [data])

  const onChangeView = (view) => {
    setView(view);
  };




  return (
    <>
        
     {
      !isLoading && <>
   

<div className="container-fluid mb-3 mt-3">

<div className="row">
  <div className="col-md-2">
    { availableCategories.length > 0 && <FilterCategory categories={availableCategories} />}
  
    <FilterPrice />
  </div>
  <div className="col-md-10">
    <div className="row">
      <div className="col-7">
        <span className="align-middle fw-bold">
          {details?.mainInfo?.totalResults} results for{" "}
          <span className="text-primary">{details?.mods?.filter?.filterItems[0]?.displayValue}</span>
        </span>
      </div>
      <div className="col-5 d-flex justify-content-end">
        <SortBy options={details?.mods?.sortBar?.sortItems} />
        <div className="btn-group ms-3" role="group">
          <button
            aria-label="Grid"
            type="button"
            onClick={() => onChangeView("grid")}
            className={`btn ${
              view === "grid"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
          >
            <FaTh />
          </button>
          <button
            aria-label="List"
            type="button"
            onClick={() => onChangeView("list")}
            className={`btn ${
              view === "list"
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </div>
    <hr />
    <div className="row g-3">
      {view === "grid" && products?.map((product, index) => {
        return (
          <div key={index} className="col-md-3 col-sm-6 col-xs-6 col-lg-2">
            <CardProductGrid data={product} />
          </div>
        );
      })}
      {view === "list" &&
        products.map((product, index) => {
          return (
            <div key={index} className="col-md-12">
              <CardProductList data={product} />
            </div>
          );
        })}
    </div>
    <hr />
  </div>
</div>
</div>
      </>
     }
</>
);
}

export async function getServerSideProps(context) {

const { req,query } = context;
const { id, slug, brand ,max_price	,min_price, order, orderby} = query;

const protocol = req.headers['x-forwarded-proto'] || 'http';
const host = req.headers['x-forwarded-host'] || req.headers.host;
const baseURL = `${protocol}://${host}`;



try {
const response = await axios.get(`${baseURL}/api/product`, {
headers: {
'Authorization': `${process.env.ACCESS_TOKEN}`
},
params: {
per_page: 40,
brand: brand,
max_price: max_price,
min_price: min_price,
category: id === 'shop' ? null : slug,
orderby: orderby,
order: order
}

});
const data = response.data;

return {
props: { data },
};
} catch (error) {
console.error(error);
return {
props: { data: error },
};
}
}

export default CategoryPage;
