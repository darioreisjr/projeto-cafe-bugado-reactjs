import coffePrincipal from "../assets/coffePrincipal.png";
import Womans from "../assets/bannerabount.png";
import backgroundBannerHome from "../assets/backgroundBannerHome.png";
import backgroundPage01 from "../assets/backgroundPage01.png";
import coffeTimefundo from "../assets/coffeTimefundo.png";

import cafeBugado from "../assets/cafebugado.png";
import cappuccinoCommit from "../assets/cappuccinoCommit.png";
import mochaPullRequest from "../assets/mochaPullRequest.png";
import frappuccinoDebug from "../assets/frappuccinoDebug.png";

import Post1 from "../assets/post1.png";
import Post2 from "../assets/post2.png";
import Post3 from "../assets/post3.png";

import PostMobile1 from "../assets/post1mobile.png";
import PostMobile2 from "../assets/post2mobile.png";
import PostMobile3 from "../assets/post3mobile.png";

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../components/button";
import ProductCard from "../components/product-card";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const topProducts = [
    {
      id: 1,
      name: "Café Bugado",
      description:
        "Um café espresso clássico, forte e encorpado, para dar energia aos programadores que precisam de um impulso extra.",
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

  const posts =
    window.innerWidth < 500
      ? [PostMobile1, PostMobile2, PostMobile3]
      : [Post1, Post2, Post3];

  const handleScrollClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="relative z-0">
      <img
        src={coffeTimefundo}
        alt="coffe background"
        className="absolute top-0 left-0 -z-10 lg:w-1/2 pointer-events-none"
      />
      <div className="flex flex-col lg:flex-row items-center lg:justify-center">
        <img className="w-auto lg:w-2/5 " src={coffePrincipal} alt="Flower1" />
        <div className="flex flex-col px-2 lg: mb-20 lg:px-5 justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="font-bold w-72 lg:w-auto text-4xl lg:text-7xl text-amber-600">
            A vida é muito curta para lidar com bugs
            <br /> sem um bom café.
          </h1>
          <h2 className="font-semibold text-xl lg:text-3xl text-[#58352d]">
            Descafeine seus bugs!
          </h2>
          <Link to="/products">
            <Button
              onClick={handleClick}
              className="mt-4 lg:mt-0"
              style="bg-amber-800 hover:bg-amber-600 text-[#e1e3de] font-bold w-fit px-2 text-lg lg:text-2xl"
            >
              CONHEÇA NOSSOS PRODUTOS
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative z-10">
        <div
          className="absolute top-0 opacity-0.9 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundBannerHome})` }}
        />
        <div className="relative  flex flex-col lg:flex-row justify-center items-center py-32 gap-20 ">
          <h3 className="text-[#e1e3de] group text-2xl lg:text-4xl flex flex-col justify-center items-center gap-2">
            <FaPeopleGroup
              className="transition-all duration-200 group-hover:scale-110"
              size={70}
            />
            workshops
          </h3>
          <h3 className="text-[#e1e3de] group text-2xl lg:text-4xl flex flex-col justify-center items-center gap-2">
            <BsPersonWorkspace
              className="transition-all duration-200 group-hover:scale-110"
              size={70}
            />
            co-working
          </h3>
          <h3 className="text-[#e1e3de] group text-2xl lg:text-4xl flex flex-col justify-center items-center gap-2">
            <FaWifi
              className="transition-all duration-200 group-hover:scale-110"
              size={70}
            />
            Wi-Fi gratuito
          </h3>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row px-4 lg:px-0 py-20 ">
        <img
          className="w-auto md:object-contain lg:w-2/4 mb-5 lg:mb-0 "
          src={Womans}
          alt="Womans"
        />
        <div className="flex flex-col gap-2 w-full lg:w-1/3 justify-center">
          <h1 className="text-[#58352d] text-3xl lg:text-6xl font-semibold">
            Quem somos
          </h1>
          <h2 className="text-xl lg:text-2xl mb-5">
            Um refúgio para programadores
          </h2>
          <p className="text-lg lg:text-xl text-justify text-gray-700">
            Na tela, linhas de código se amontoam, Um bug teima em persistir, a
            frustração aumenta. É hora de buscar um refúgio, um lugar para
            persistir, O Café Bugado te espera, com aroma que acalenta. Um café
            forte, um código limpo, Uma comunidade que te acolhe, te escuta e te
            anima. No Café Bugado, a solução se aproxima, Com ideias frescas e
            sorrisos que contagiam.
          </p>
          <Link to="/about">
            <Button
              onClick={handleClick}
              style="bg-amber-800 hover:bg-amber-700 text-[#e1e3de] font-bold w-fit px-2 text-lg lg:text-2xl"
            >
              LER MAIS
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative z-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundPage01})` }}
        />
        <div className="relative flex flex-col justify-center items-center lg:px-0 py-20 lg:py-32 gap-10 ">
          <h1 className="text-3xl lg:text-5xl font-semibold text-[#e1e3de]">
            Produtos mais vendidos!
          </h1>
          <h2 className="text-lg lg:text-2xl text-gray-300 text-center">
            Um café delicioso e energizante que te ajuda a encontrar e corrigir
            bugs.
            <br />
            Aqui estão alguns de nossos produtos mais amados por vocês!
          </h2>
          <div className="flex w-full [&::-webkit-scrollbar]:hidden lg:justify-center lg: gap-3 lg:gap-10 overflow-x-auto ">
            {topProducts.map((product) => (
              <div key={product.id} className="px-2 lg:w-auto lg:max-w-auto">
                <Link
                  onClick={handleScrollClick}
                  key={product.id}
                  to={`/products/${product.id}`}
                >
                  <ProductCard product={product} />
                </Link>
              </div>
            ))}
          </div>
          <Link to="/products">
            <Button
              onClick={handleClick}
              style="bg-amber-800 lg:mt-20 hover:bg-amber-600 text-[#e1e3de] font-bold w-fit px-2 text-lg lg:text-2xl"
            >
              VER TODOS PRODUTOS
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative px-3 lg:px-0 flex flex-col justify-center items-center py-20 lg:py-32 gap-10 ">
        <h1 className="text-2xl lg:text-5xl  font-semibold text-[#58352d]">
          Fique por dentro das novidades
        </h1>
        <h2 className="text-lg lg:text-2xl  text-gray-700">
          Nos siga no{" "}
          <a
            href="https://www.instagram.com/darioreisjr/"
            target="_blank"
            className="text-pink-800 font-semibold"
          >
            INSTAGRAM
          </a>
          !<br /> Postamos tudo oque acontece por lá!
        </h2>

        <Carousel
          className="lg:w-2/4 w-2/2 cursor-pointer"
          showStatus={false}
          showThumbs={false}
          onClickItem={() =>
            window.open("https://www.instagram.com/darioreisjr/", "_blank")
          }
        >
          {posts.map((post, index) => (
            <div key={index} style={{ width: "100%", height: "100%" }}>
              <img
                src={post}
                alt={`Post ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="bg-[#58352d] px-3 lg:px-0 flex flex-col justify-center items-center py-20">
        <img
          src={coffeTimefundo}
          alt="coffe time background"
          className="absolute z-0 opacity-15 lg:w-2/6 lg:right-10 lg:bottom-0 bottom-10 pointer-events-none"
        />

        <div
          id="contact"
          className="flex flex-col lg:flex-row gap-12 w-full lg:w-auto"
        >
          <div className="flex flex-col">
            <h1 className="text-3xl lg:text-3xl font-semibold text-[#e1e3de] mb-10">
              Onde estamos?
            </h1>

            <div className="flex flex-col gap-10 w-full lg:w-1/2">
              <div className="text-lg lg:text-xl flex flex-row gap-2 items-center text-[#e1e3de] mt-4">
                <IoLocationSharp size={40} />
                <div className="flex flex-col lg:w-full">
                  <strong>Endereço:</strong>Rua dos Bugados, 404, Bairro Vila do
                  Código , Cidade São Paulo, SP - Brasil
                </div>
              </div>
              <div className="text-lg lg:text-xl flex flex-row gap-2 items-center text-[#e1e3de] mt-4">
                <MdEmail size={40} />
                <div className="flex flex-col">
                  <strong>Email:</strong>loja@cafebugado.com.br
                </div>
              </div>
              <div className="text-lg lg:text-xl flex flex-row gap-2 items-center text-[#e1e3de] mt-4">
                <FaPhoneAlt size={40} />
                <div className="flex flex-col">
                  <strong>Telefone:</strong>+55 11 9999-9999
                </div>
              </div>
              <div className="text-lg lg:text-xl flex flex-row gap-2 items-center text-[#e1e3de] mt-4">
                <FaWhatsapp size={40} />
                <div className="flex flex-col">
                  <strong>WhatsApp</strong>+55 11 99999-9999
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full lg:mt-20 lg:w-1/2">
            <h2 className="text-lg lg:text-xl font-semibold text-[#e1e3de]">
              Entre em contato
            </h2>
            <form className="gap-2">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full py-2 px-4 mb-4 rounded-lg bg-[#e1e3de] text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                placeholder="Seu email"
                className="w-full py-2 px-4 mb-4 rounded-lg bg-[#e1e3de] text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <textarea
                placeholder="Digite sua mensagem..."
                className="w-full py-2 px-4 mb-4 rounded-lg bg-[#e1e3de] text-gray-900 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-600"
              ></textarea>
              <Button style="bg-amber-800 hover:bg-amber-600 text-[#e1e3de] font-bold w-full px-2 text-lg lg:text-2xl">
                ENVIAR MENSAGEM
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${coffeTimefundo})` }}
        />
      </div>
    </div>
  );
};

export default Home;
