import { Container, Row, Col } from 'react-bootstrap';
import { StarFill,StarHalf  } from 'react-bootstrap-icons';

function ProductReviews({product,  title, rating, ratings }) {
 
  const wholeStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - wholeStars - (hasHalfStar ? 1 : 0);
  
  const stars = [];
  
  for (let i = 0; i < wholeStars; i++) {
    stars.push(<StarFill key={i} className="text-warning me-1" />);
  }
  
  if (hasHalfStar) {
    stars.push(<StarHalf key={wholeStars} className="text-warning me-1" />);
  }
  
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<StarFill  key={wholeStars + (hasHalfStar ? 1 : 0) + i} className="text-secondary me-1" />);
  }
  return (
    <Container className="my-3">
      <Row className="align-items-center">
        
        <Col md={6} className="text-md-end">
          <div className="d-flex align-items-center">
            <h5 className="me-2 big">{rating}/5</h5>
           
            {stars}
          </div>
         
        </Col>
        <span className='text-muted'>10 Ratings</span>
      </Row>
      <Row>
        <Col>
          {/* <p>{`${ratings} Ratings`}</p> */}
        </Col>
      </Row>
      <Row>
        <Col md={2} sm={2} xs={2} className="my-2">
          <div className="d-flex flex-column align-items-center">
            <h5>{ratings?.[0] ?? 0}</h5>
            <p>5 Star</p>
          </div>
        </Col>
        <Col md={2} sm={2} xs={2} className="my-2">
          <div className="d-flex flex-column align-items-center">
            <h5>{ratings?.[1] ?? 0}</h5>
            <p>4 Star</p>
          </div>
        </Col>
        <Col md={2} sm={2} xs={2} className="my-2">
          <div className="d-flex flex-column align-items-center">
          <h5>{ratings?.[2] ?? 0}</h5>
            <p>3 Star</p>
          </div>
        </Col>
        <Col md={2} sm={2} xs={2} className="my-2">
          <div className="d-flex flex-column align-items-center">
          <h5>{ratings?.[3] ?? 0}</h5>
            <p>2 Star</p>
          </div>
        </Col>
        <Col md={2} sm={2} xs={2} className="my-2">
          <div className="d-flex flex-column align-items-center">
          <h5>{ratings?.[4] ?? 0}</h5>
            <p>1 Star</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default ProductReviews;