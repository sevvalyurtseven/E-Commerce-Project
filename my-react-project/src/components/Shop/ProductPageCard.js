import {
  faAngleDown,
  faListCheck,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import PageButton from "../PageButton";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  clearProductList,
  fetchProducts,
  setOffset,
} from "../../store/actions/productActions";
import ScrollToTopButton from "../ScrollToTopButton";
import InfiniteScroll from "react-infinite-scroll-component";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";

const ProductPageCard = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryQuery = queryParams.get("category");
  const filterQuery = queryParams.get("filter");
  const sortQuery = queryParams.get("sort");
  console.log("categoryyyyyyyy", categoryQuery, filterQuery, sortQuery);
  const [category, setCategory] = useState(categoryQuery || "");
  const [filter, setFilter] = useState(filterQuery || "");
  const [sort, setSort] = useState(sortQuery || "");
  const history = useHistory();

  const { productList, totalProductCount, fetchState, offset } = useSelector(
    (state) => state.product
  );
  const limit = 25;

  console.log("ProductList", productList);
  console.log("Total product count", totalProductCount);

  useEffect(() => {
    // URL'deki parametreleri güncel değerlerle ayarla
    setCategory(categoryQuery || "");
    setFilter(filterQuery || "");
    setSort(sortQuery || "");

    console.log("kategöriiiiiiiiii", categoryQuery, filterQuery, sortQuery);

    // Yeni sorgu parametrelerine göre ürünleri getir
    dispatch(setOffset(0));
    dispatch(clearProductList([]));
    dispatch(fetchProducts(categoryQuery, filterQuery, sortQuery, limit, 0));
  }, [categoryQuery, filterQuery, sortQuery, dispatch]);

  const onSubmit = (data) => {
    console.log("DATAAAAA", data);
    dispatch(setOffset(0));
    dispatch(clearProductList([]));
    dispatch(fetchProducts(category, filter, sort, limit, 0));
    const queryParams = new URLSearchParams();
    if (category) queryParams.append("category", category);
    if (filter) queryParams.append("filter", filter);
    if (sort) queryParams.append("sort", sort);

    history.push(`/productlist?${queryParams.toString()}`);
  };

  const loadMore = () => {
    const newOffset = offset + limit;
    dispatch(setOffset(newOffset));
    dispatch(fetchProducts(category, filter, sort, limit, newOffset));
  };

  return (
    <div className="w-full flex flex-col py-20 px-10">
      <div className="flex items-center sm:justify-between justify-center flex-wrap sm:flex-nowrap gap-5 sm:gap-0">
        <p className="text-neutral-500 text-sm font-bold leading-normal tracking-wider">
          Showing all {totalProductCount} results
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
          <form onSubmit={handleSubmit(onSubmit)} className="flex">
            <input
              type="text"
              value={filter}
              {...register("filter")}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search..."
              className="flex border border-solid bg-stone-50 rounded-[5px] text-sm p-3"
            />
            <div className="flex rounded text-neutral-500 text-sm font-normal leading-7 tracking-wider border border-solid bg-stone-50 p-3 ">
              <select
                value={category}
                {...register("category")}
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
                {...register("sort")}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="">Sort by</option>
                <option value="price:asc">Price: Low to High</option>
                <option value="price:desc">Price: High to Low</option>
                <option value="rating:asc">Rating: Low to High</option>
                <option value="rating:desc">Rating: High to Low</option>
              </select>
            </div>

            <div className="flex items-center border border-solid bg-sky-500 py-4 px-6 rounded-[5px]">
              <button className=" text-white text-sm font-bold leading-normal tracking-wider">
                Filter
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 flex-wrap px-20 py-14">
        <InfiniteScroll
          className="flex flex-wrap sm:flex-row gap-8 justify-center sm:justify-start items-start"
          dataLength={productList.length}
          next={loadMore}
          hasMore={productList.length < totalProductCount}
        >
          {/*{fetchState === "FETCHING" && (
          <div className="flex items-center justify-center w-full h-72">
            <svg className="animate-spin h-12 w-12 border-t-2 border-black rounded-full"></svg>
          </div>
        )} */}
          {fetchState === "FETCHED" &&
            productList.map((p) => (
              <div
                key={p.id}
                className="flex flex-wrap justify-between w-1/5 border rounded hover:scale-110 transition-transform"
              >
                <ProductCard product={p} img={p.images[0].url} />
              </div>
            ))}
        </InfiniteScroll>
        <div>
          <ScrollToTopButton />
        </div>
      </div>
    </div>
  );
};

export default ProductPageCard;
