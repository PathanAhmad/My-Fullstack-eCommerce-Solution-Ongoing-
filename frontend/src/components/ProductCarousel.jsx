import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  if (isLoading) return null;
  if (error) return <Message variant='danger'>{error?.data?.message || error.error}</Message>;

  const carouselItemStyle = {
    textAlign: 'center', // Center-aligns content inside the carousel item
  };

  const carouselCaptionStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)', // Centers the caption horizontally
    textAlign: 'center', // Centers text inside the caption
    color: 'white', // Ensures text is visible on background
  };

  return (
    <Carousel pause='hover' className='bg-primary mb-4'>
      {products.map(product => (
        <Carousel.Item key={product._id} style={carouselItemStyle}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption style={carouselCaptionStyle}>
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
