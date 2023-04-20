import { useRouter } from 'next/router';
import queryString from 'query-string';
import { Form } from 'react-bootstrap';
const FilterPrice = (props) => {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const min_price = event.target.elements.min.value;
    const max_price = event.target.elements.max.value;
  
    // Get the existing query parameters as an object
    const queryParamsObj = router.query;
  
    // Remove min_price and max_price from the query parameters if they are not present in the original URL
    if (!router.asPath.includes('min_price=')) {
      delete queryParamsObj.min_price;
    }
  
    if (!router.asPath.includes('max_price=')) {
      delete queryParamsObj.max_price;
    }
  
    // Add or update the query parameters based on which fields have non-empty values
    if (min_price && !max_price) {
      queryParamsObj.min_price = min_price;
    } else if (!min_price && max_price) {
      queryParamsObj.max_price = max_price;
    } else if (min_price && max_price) {
      queryParamsObj.min_price = min_price;
      queryParamsObj.max_price = max_price;
    }
  
    // Convert the updated object back into a query string
    const queryParams = queryString.stringify(queryParamsObj);
  
    // Construct the new URL with both old and new query parameters
    const newUrl = `${window.location.pathname}?${queryParams}`;
  
    // Replace the current URL with the new one
    router.push(newUrl);
  }
  return (
    <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterPrice"
        aria-expanded="true"
        aria-controls="filterPrice"
      >
        <span>Price</span>
      </div>
      <div className="card-body show" id="filterPrice">
        <Form onSubmit={handleSubmit} className="d-flex flex-wrap align-items-center justify-content-between">
          <Form.Control  className="w-30" type="number" name="min" placeholder="Min" />
          <Form.Control className="w-30" type='number' placeholder="Max"  name="max" />
          <button type="submit" className="border-none border-0">▶️</button>
        </Form>
      </div>
    </div>
  );
};

export default FilterPrice;
