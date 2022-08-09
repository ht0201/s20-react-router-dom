import { useParams } from "react-router-dom";

const ProductDetailts = () => {
  const params = useParams();
  return (
    <>
      <h2>The Product Detailts page</h2>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetailts;
