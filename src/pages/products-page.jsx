import ProductCard from "../components/product-card";

import cafeBugado from "../assets/cafebugado.png";
import cappuccinoCommit from "../assets/cappuccinoCommit.png";
import mochaPullRequest from "../assets/mochaPullRequest.png";
import frappuccinoDebug from "../assets/frappuccinoDebug.png";
import ChaChaiIntegracao from "../assets/ChaChaiIntegracao.png";
import MacchiatoRefatoracao from "../assets/MacchiatoRefatoracao.png";
import TortaGitTart from "../assets/TortaGitTart.png";
import BoloBugFix from "../assets/BoloBugFix.png";
import MuffinHackathon from "../assets/MuffinHackathon.png";
import CookieDeadlock from "../assets/CookieDeadlock.png";
import SanduícheCodeSandwich from "../assets/SanduícheCodeSandwich.png";
import SaladaStackOverflow from "../assets/SaladaStackOverflow.png";

import { Link } from "react-router-dom";

const ProductsPage = () => {
  const products = [
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
    {
      id: 5,
      name: "Chá Chai Integração",
      description:
        "Um chá chai aromático e relaxante, para ajudar a integrar diferentes partes do seu código.",
      price: "R$ 17,00",
      imageSrc: ChaChaiIntegracao,
    },
    {
      id: 6,
      name: "Macchiato Refatoração",
      description:
        " Um macchiato forte e intenso, para te ajudar a melhorar a qualidade do seu código.",
      price: "R$ 8,00",
      imageSrc: MacchiatoRefatoracao,
    },
    {
      id: 7,
      name: "Torta Git Tart",
      description:
        "Uma torta deliciosa e reconfortante, com recheio de maçã e especiarias, para te dar energia para a próxima maratona de código.",
      price: "R$ 24,00",
      imageSrc: TortaGitTart,
    },
    {
      id: 8,
      name: "Bolo Bug Fix",
      description:
        " Um bolo fofinho e saboroso, com cobertura de chocolate, para celebrar a correção de um bug difícil.",
      price: "R$ 19,00",
      imageSrc: BoloBugFix,
    },
    {
      id: 9,
      name: "Muffin Hackathon",
      description:
        "Um muffin nutritivo e prático, para te manter saciado durante um hackathon.",
      price: "R$ 9,00",
      imageSrc: MuffinHackathon,
    },
    {
      id: 10,
      name: "Cookie Deadlock",
      description:
        "Um cookie crocante e irresistível, para te ajudar a lidar com deadlocks.",
      price: "R$ 8,00",
      imageSrc: CookieDeadlock,
    },
    {
      id: 11,
      name: "Sanduíche Code Sandwich",
      description:
        "Um sanduíche nutritivo e saboroso, feito com pão integral, queijo, tomate e alface, para te manter focado durante o dia.",
      price: "R$ 25,00",
      imageSrc: SanduícheCodeSandwich,
    },
    {
      id: 12,
      name: "Salada Stack Overflow",
      description:
        "Uma salada fresca e crocante, com alface, rúcula, tomate cereja, pepino e frango grelhado, para te ajudar a encontrar respostas para seus problemas de programação.",
      price: "R$ 21,00",
      imageSrc: SaladaStackOverflow,
    },
  ];

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col p-1 gap-2 justify-center items-center">
      <h1 className="text-2xl mb-10 font-bold">PRODUTOS</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-6 md:gap-x-3 md:gap-y-5 gap-x-1 gap-y-3 mb-10">
        {products.map((product) => (
          <Link
            onClick={handleClick}
            className="flex "
            key={product.id}
            to={`/products/${product.id}`}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
