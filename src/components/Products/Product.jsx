import ImageComponent from "../components/ImageComponent";
function Product({ data }) {
  return (
    <div className="h-[250px] sm:h-[350px]  flex-1  min-w-[150px] sm:min-w-[300px] flex flex-col  cursor-pointer">
      <ImageComponent
        src={data.path}
        alt={data.name}
        className={"max-h-[150px] sm:max-h-[275px]"}
      />
      <div className="flex sm:items-center justify-between sm:gap-5 gap-2 text-stone-800 tracking-tight uppercase px-1 font-medium pt-2 flex-wrap sm:flex-row flex-col items-start">
        <span>{data.name}</span>
        <span>$ {data.price}</span>
      </div>
      <span className="px-1 text-stone-600 uppercase tracking-tight text-xs pt-1 font-medium">
        {data.category}
      </span>
    </div>
  );
}

export default Product;
