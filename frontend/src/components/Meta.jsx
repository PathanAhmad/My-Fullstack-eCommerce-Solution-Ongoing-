import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To ClothEx',
  description: 'We sell the best Clothes for cheap',
  keywords: 'Clothes, T-Shirts, Pants, Jackets, Fashion',
};

export default Meta;
