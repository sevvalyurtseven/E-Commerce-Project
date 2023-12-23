const PageButton = () => {
    const clickHandler = (e) => {
      e.target.classList.add("hover:bg-[#23A6F0]");
    };
  
    return (
      <div className="flex flex-nowrap">
        <button
          className="text-base tracking-wider py-6 px-6 border-solid border-[1.346px] border-[#E8E8E8]  text-[#BDBDBD] bg-[#F3F3F3] shadow-[#BDBDBD] font-bold"
          onClick={clickHandler}
        >
          First
        </button>
        <button
          className="text-base py-6 tracking-wider px-5 border-solid border-[1.346px] border-[#E8E8E8]  shadow-[#BDBDBD] "
          onClick={clickHandler}
        >
          1
        </button>
        <button
          className="text-base py-6 px-5 tracking-wider border-solid border-[1.346px] border-[#E8E8E8] shadow-[#BDBDBD] "
          onClick={clickHandler}
        >
          2
        </button>
        <button
          className="text-base py-6 px-5 tracking-wider border-solid border-[1.346px] border-[#E8E8E8]  shadow-[#BDBDBD] "
          onClick={clickHandler}
        >
          3
        </button>
        <button
          className="text-base py-6 px-6 tracking-wider border-solid border-[1.346px] border-[#E8E8E8]   shadow-[#BDBDBD] font-bold"
          onClick={clickHandler}
        >
          Next
        </button>
      </div>
    );
  };
  
  export default PageButton;
  