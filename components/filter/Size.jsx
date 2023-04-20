import React, { useEffect, useState } from "react";
import queryString from 'query-string';
import { useRouter } from 'next/router';

const FilterBrand = ({ name, items }) => {
  const router = useRouter();
  const parsed = router.asPath ? queryString.parse(router.asPath.split(/\?/)[1]) : {};
  const [selectedBrands, setSelectedBrands] = useState(parsed.brand ? parsed.brand.split(',') : []);

  const toggleBrand = (brandId) => {
    const index = selectedBrands.indexOf(brandId);
    let newBrands;

    if (index > -1) {
      // Remove the brand
      newBrands = [...selectedBrands.slice(0, index), ...selectedBrands.slice(index + 1)];
    } else {
      // Add the brand to the end of the list
      newBrands = [...selectedBrands, brandId];
    }

    // Update the state with the new list of brands
    setSelectedBrands(newBrands);

    // Update the URL with the new list of brands or remove the "brand" query parameter if there are no selected brands
    router.push({
      pathname: router.pathname,
      query: newBrands.length ? { ...router.query, brand: newBrands.filter(Boolean).join(',') } : { ...router.query, brand: undefined },
    });
  };

  return (
    <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase "
       
      >
       <span> {name}</span>
      </div>
      <ul className="list-group list-group-flush show" id={`filter${name}`}>
        {items.slice(0,5).map((brand) => {
          const isChecked = selectedBrands.includes(brand.id);
          return (
            <li key={brand.id} className="list-group-item">
              <div className="row g-0">
                <div className="form-check col">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={brand.id}
                    name={name}
                    value={brand.name}
                    checked={isChecked}
                    onChange={() => toggleBrand(brand.id)}
                  />
                  <label className="form-check-label" htmlFor={brand.id}>
                    {brand.name}
                  </label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterBrand;
