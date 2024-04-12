import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

const ProductsPage = React.lazy(() => import("./pages/products-page"));
const ProductItem = React.lazy(() => import("./pages/product-item"));
const Header = React.lazy(() => import("./components/header"));
const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/about"));
const Footer = React.lazy(() => import("./components/footer"));

import cafeBugado from "./assets/cafebugado.png";
import cappuccinoCommit from "./assets/cappuccinoCommit.png";
import mochaPullRequest from "./assets/mochaPullRequest.png";
import frappuccinoDebug from "./assets/frappuccinoDebug.png";
import ChaChaiIntegracao from "./assets/ChaChaiIntegracao.png";
import MacchiatoRefatoracao from "./assets/MacchiatoRefatoracao.png";
import TortaGitTart from "./assets/TortaGitTart.png";
import BoloBugFix from "./assets/BoloBugFix.png";
import MuffinHackathon from "./assets/MuffinHackathon.png";
import CookieDeadlock from "./assets/CookieDeadlock.png";
import SanduícheCodeSandwich from "./assets/SanduícheCodeSandwich.png";
import SaladaStackOverflow from "./assets/SaladaStackOverflow.png";

import LoadingIndicator from "./components/loading-indicator";

function App() {
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

  return (
    <div>
      <Suspense fallback={<LoadingIndicator />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          {products.map((product) => (
            <Route
              key={product.id}
              path={`/products/${product.id}`}
              element={<ProductItem product={product} />}
            />
          ))}
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
