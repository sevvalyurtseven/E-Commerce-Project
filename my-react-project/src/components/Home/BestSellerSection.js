import ProductCards from "../ProductCards";

function BestSellerSection(){
    return(
        <div className="flex flex-col items-center justify-center py-12 px-10">
            <h4 className=" text-neutral-500 text-xl font-normal leading-[30px] tracking-tight">Featured Products</h4>
            <h1 className=" text-slate-800 text-2xl font-bold leading-loose tracking-tight">BESTSELLER PRODUCTS </h1>
            <p className=" text-neutral-500 text-sm font-normal leading-tight tracking-tight">Problems trying to resolve the conflict between </p>
               
                <ProductCards/>
                <div className="py-8">
            <button className="border rounded border-[#23A6F0] text-[#23A6F0] font-bold px-10 py-4">
        LOAD MORE PRODUCTS
      </button>
      </div>


        </div>
    )
}
export default BestSellerSection;