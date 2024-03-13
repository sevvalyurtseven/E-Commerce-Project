import line from "../../Assets/PRODUCT/Line 1.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";
import { useEffect, useState } from "react";

const BestSellerProduct = () => {
  const dispatch = useDispatch();
  const [rating, setrating] = useState("rating:desc");
  const data = useSelector((state) => state.product.productList);
  console.log("bestsellerrrrr", data);

  const sortedData = [...data].sort((a, b) => b.rating - a.rating);
  // Ürünleri derecelerine göre sırala ve ilk 8 ürünü al

  const topProducts = sortedData.slice(0, 8);
  console.log("bestsellerrrrr", topProducts);

  useEffect(() => {
    // Ürünleri derecelendirme sırasına göre çek
    dispatch(fetchProducts({ sort: rating }));
  }, [dispatch]);

  return (
    <div className="sm:px-44 py-8 bg-[#FAFAFA]">
      <h1 className="text-slate-800 text-2xl font-bold leading-loose tracking-wider text-center sm:text-start">
        BESTSELLER PRODUCTS
      </h1>
      <img src={line} alt="Decorative line" className="py-5" />
      <div className="flex gap-6 flex-wrap justify-center sm:justify-start items-center pb-10">
        {topProducts.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-5 pb-8 bg-[#FFFFFF]"
          >
            <img
              src={product.images[0].url}
              alt={`Product ${index}`}
              className="w-52"
            />
            <h5 className="text-black text-base font-bold tracking-wider leading-normal pt-[0.8rem]">
              {product.name}
            </h5>
            <p className="text-[#737373] text-sm font-bold tracking-wider">
              {product.description}
            </p>
            <div className="flex justify-center gap-2">
              <h5 className="text-[#BDBDBD] font-bold text-base">
                ${product.price * 2}
              </h5>
              <h5 className="text-[#23856D] font-bold text-base">
                ${product.price}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellerProduct;
