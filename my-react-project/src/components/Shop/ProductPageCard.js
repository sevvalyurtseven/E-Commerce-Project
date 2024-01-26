import {
  faAngleDown,
  faListCheck,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PageButton from "../PageButton";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/actions/productActions";

const ProductPageCard = () => {
  const products = useSelector((state) => state.product.productList);

  const totalNum = useSelector((state) => state.product.totalProductCount);
  const fetchState = useSelector((state) => state.product.fetchState);

  const dispatch = useDispatch();

  const handleFilterButton = () => {
    dispatch(fetchProducts(category, filter, sort));
  };

  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  return (
    <div className="w-full flex flex-col py-20 px-10">
      <div className="flex items-center sm:justify-between justify-center flex-wrap sm:flex-nowrap gap-5 sm:gap-0">
        <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">
          Showing all {totalNum} results
        </p>

        <div className="flex items-center gap-5">
          <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">
            Views:
          </p>
          <button className="border border-solid border-gray-200 rounded-[5px] text-2xl p-4">
            <FontAwesomeIcon icon={faTableCellsLarge} />
          </button>
          <button className="border border-solid border-gray-200 rounded-[5px] text-2xl p-4">
            <FontAwesomeIcon icon={faListCheck} />
          </button>
        </div>
        <div className="flex gap-5 items-center">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search..."
            className="flex border border-solid bg-stone-50 rounded-[5px] text-sm p-3"
          />
          <div className="flex rounded text-neutral-500 text-sm font-normal leading-7 tracking-wider border border-solid bg-stone-50 p-3 ">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm leading-7 text-neutral-500 font-normal tracking-wider bg-stone-50"
            >
              <option value="">All Categories</option>
              <option value="1">T-Shirt</option>
              <option value="2">Shoes</option>
              <option value="3">Jacket</option>
              <option value="4">Dress</option>
            </select>
          </div>
          <div className="flex mr-2 px-2 py-2 text-neutral-500 text-sm font-normal leading-7 tracking-wider rounded border border-solid bg-stone-50 p-3 ">
            <select
              className="text-sm leading-7 text-neutral-500 font-normal tracking-wider p-1 bg-stone-50"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option>Sort by</option>
              <option value="price:asc">Price: Low to High</option>
              <option value="price:desc">Price: High to Low</option>
              <option value="rating:asc">Rating: Low to High</option>
              <option value="rating:desc">Rating: High to Low</option>
            </select>
          </div>

          <div className="flex items-center border border-solid bg-sky-500 py-4 px-6 rounded-[5px]">
            <button
              onClick={handleFilterButton}
              className=" text-white text-sm font-bold leading-normal tracking-wider"
            >
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 flex-wrap px-20 py-14">
        {fetchState === "FETCHING" && (
          <div className="flex items-center justify-center w-full h-72">
            <svg className="animate-spin h-12 w-12 border-t-2 border-black rounded-full"></svg>
          </div>
        )}
        {fetchState === "FETCHED" &&
          products.map((p) => (
            <div
              key={p.id}
              className="flex flex-wrap justify-between py-4 gap-5 w-1/5"
            >
              <ProductCard product={p} img={p.images[0].url} />
            </div>
          ))}
      </div>

      <div className="flex items-center flex-col">
        <PageButton />
      </div>
    </div>
  );
};

export default ProductPageCard;
