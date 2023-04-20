import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SortBy = ({ options }) => {
  const router = useRouter();
  const [selectedSort, setSelectedSort] = useState(router.query.orderby || 'popularity');

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedSort(selectedOption);
    router.push({
      pathname: router.pathname,
      query: { ...router.query, orderby: selectedOption },
    });
  };

  return (
    <div>
      <select
        className="form-select mw-180 float-start"
        aria-label="Default select"
        value={selectedSort}
        onChange={handleSortChange}
      >
        <option value="popularity">Best Match</option>
        <option value="price-asc">Price high to low</option>
        <option value="price-desc">Price low to high</option>
      </select>
    </div>
  );
};

export default SortBy;