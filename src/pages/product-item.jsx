import Button from "../components/button";
import ProductCard from "../components/product-card";

import cafeBugado from "../assets/cafebugado.png";
import cappuccinoCommit from "../assets/cappuccinoCommit.png";
import mochaPullRequest from "../assets/mochaPullRequest.png";
import frappuccinoDebug from "../assets/frappuccinoDebug.png";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const topProducts = [
    {
      id: 1,
      name: "Café Bugado",
      description:
        " Um café espresso clássico, forte e encorpado, para dar energia aos programadores que precisam de um impulso extra.",
      price: "R$ 23,00",
      imageSrc: cafeBugado,
    },
    {
      id: 2,
      name: "Cappuccino Commit",
      description:
        "Um cappuccino cremoso e suave, perfeito para celebrar um commit bem-sucedido.",
      price: "R$ 14,00",
      imageSrc: cappuccinoCommit,
    },
    {
      id: 3,
      name: "Mocha Pull Request",
      description:
        "Um mocha rico e saboroso, ideal para discutir uma pull request com seus colegas.",
      price: "R$ 16,00",
      imageSrc: mochaPullRequest,
    },
    {
      id: 4,
      name: "Frappuccino Debug",
      description:
        "Um frappuccino refrescante e revitalizante, para ajudar a encontrar e corrigir bugs.",
      price: "R$ 21,00",
      imageSrc: frappuccinoDebug,
    },
  ];

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-center  items-center mb-10">
      <div className="flex flex-col gap-5 mx-3 lg:flex-row h-fit p-5 w-auto bg-white rounded-lg">
        <div className="flex justify-center items-center">
          <img
            className=" w-full h-auto max-h-96 max-w object-contain rounded-lg"
            src={product.imageSrc}
            alt={product.name}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            {product.name}
          </h1>
          <h2 className="text-lg lg:text-2xl mt-2">{product.description}</h2>
          <div className="flex flex-col lg:mt-20">
            <h1 className="text-2xl lg:text-4xl font-bold text-amber-600 mt-5">
              {product.price}
            </h1>
            <h2 className="text-xl text-gray-600">No PIX ou Cartão</h2>
            <Button style="bg-amber-800 hover:bg-amber-600 w-auto text-2xl text-white font-semibold">
              COMPRAR
            </Button>
          </div>
        </div>
      </div>
      <h1 className="text-2xl mt-10 font-bold">PRODUTOS RELACIONADOS</h1>
      <div className="flex w-full mt-2 [&::-webkit-scrollbar]:hidden lg:justify-center lg: gap-3 lg:gap-10 overflow-x-auto ">
        {topProducts.map((product) => (
          <div key={product.id} className="px-2 lg:w-auto lg:max-w-auto">
            <Link
              onClick={handleClick}
              key={product.id}
              to={`/products/${product.id}`}
            >
              <ProductCard product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
