const ProductCard = ({ product }) => {
  return (
    <div className="w-48 h-72 bg-[white] justify-center items-center rounded-lg border-[#e1e3de] border-2 overflow-hidden hover:bg-[#eeeded] cursor-pointer transition-all duration-300">
      <div className="relative w-full h-48" style={{ paddingBottom: "100%" }}>
        <img
          className="absolute h-full w-full rounded-lg object-cover p-2"
          src={product.imageSrc}
          alt={product.name}
        />
      </div>

      <div className="px-4 py-1 flex flex-col justify-center items-center">
        <div className="text-[#351f16] font-bold text-lg text-nowrap mb-1">
          {product.name}
        </div>

        <p className="text-gray-700 text-nowrap text-md overflow-hidden max-h-16">
          {product.description.length > 15
            ? product.description.slice(0, 15) + "..."
            : product.description}
        </p>

        <p className="text-green-500 text-lg font-bold mt-1">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
