import slugify from "slugify";
import colors from "../../Assets/post/product-colors.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductCard = ({ product }) => {
  const categoryMap = {
    1: "tisort",
    2: "ayakkabi",
    3: "ceket",
    4: "elbise",
  };
  const categoryName = categoryMap[product.category_id];
  const productNameSlug = slugify(product.name, { lower: true });
  const url = `/${categoryName}/${product.id}/${productNameSlug}`;

  const productImg = product.images[0].url;

  return (
    <Link to={`${url}`}>
      <div className="flex flex-col items-center gap-5 py-6">
        <img src={productImg} alt={`card ${product.id}`} />
        <h5 className="text-slate-800 text-base font-bold leading-normal tracking-wider">
          {product.name}
        </h5>
        <p className="text-center text-neutral-500 text-sm font-bold leading-normal tracking-wider h-20">
          {product.description}
        </p>
        <div className="flex  justify-center items-center gap-2">
          <h5 className="text-center text-stone-300 text-base font-bold leading-normal tracking-wider">
            ${product.price * 2}
          </h5>
          <h5 className="text-center text-teal-700 text-base font-bold leading-normal tracking-wider">
            ${product.price}
          </h5>
        </div>
        <img src={colors} />
      </div>
    </Link>
  );
};
export default ProductCard;
