import colors from "../../Assets/post/product-colors.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ProductCard = ({ product }) => {
  const history = useHistory();
  const getProductDetail = () => {
    history.push(`/product`);
  };

  const productImg = product.images[0].url;
  return (
    <div
      onClick={() => getProductDetail()}
      className="flex flex-col items-center   gap-5 py-6"
    >
      <img src={productImg} alt={`card ${product.id}`} />
      <h5 className="text-slate-800 text-base font-bold leading-normal tracking-wider">
        Graphic Design
      </h5>
      <p className="text-center text-neutral-500 text-sm font-bold leading-normal tracking-wider">
        English Department
      </p>
      <div className="flex  justify-center items-center gap-2">
        <h5 className="text-center text-stone-300 text-base font-bold leading-normal tracking-wider">
          $16.48
        </h5>
        <h5 className="text-center text-teal-700 text-base font-bold leading-normal tracking-wider">
          $6.48
        </h5>
      </div>
      <img src={colors} />
    </div>
  );
};
export default ProductCard;
