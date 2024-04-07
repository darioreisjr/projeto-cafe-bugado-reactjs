import { Link } from "react-router-dom";
import bannerAbout from "../assets/bannerabount.png";
import Button from "../components/button";

const About = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-center items-center lg:gap-10 px-4 lg:px-0 py-20 ">
      <h1 className="text-[#58352d] text-4xl mb-5 lg:text-6xl font-semibold">
        Café Bugado: O refúgio dos programadores
      </h1>
      <img
        className="w-full lg:w-2/4 mb-5 lg:mb-0 "
        src={bannerAbout}
        alt="Womans"
      />
      <div className="flex flex-col gap-2 w-full lg:w-1/3 justify-center items-center">
        <h1 className="text-2xl font-semibold">Sobre Nós</h1>
        <p className="text-lg lg:text-xl text-justify text-gray-700 mb-8">
          O Café Bugado é mais do que apenas uma cafeteria. É um refúgio para
          programadores, desenvolvedores e entusiastas da tecnologia que lidam
          com os desafios e frustrações do dia-a-dia do desenvolvimento de
          software. Aqui, você encontrará um ambiente acolhedor e descontraído
          onde poderá relaxar, tomar um café delicioso e se conectar com outros
          profissionais da área.
        </p>
        <h1 className="text-2xl font-semibold">Nossa missão</h1>
        <p className="text-lg lg:text-xl text-justify text-gray-700 mb-8">
          Nossa missão é proporcionar um espaço onde os programadores possam se
          reunir, compartilhar ideias, colaborar em projetos e, acima de tudo,
          se divertir. Acreditamos que a comunidade é essencial para o sucesso
          da indústria de software, e o Café Bugado é um lugar onde essa
          comunidade pode prosperar.
        </p>
        <h1 className="text-2xl font-semibold">Nossos valores</h1>
        <p className="text-lg lg:text-xl text-justify text-gray-700 mb-8">
          <strong>Comunidade:</strong> Acreditamos no poder da comunidade e no
          valor da colaboração. <br />
          <strong>Criatividade:</strong> Incentivamos a criatividade e a
          inovação. <br />
          <strong>Diversidade:</strong> Acreditamos na diversidade e na
          inclusão. <br />
          <strong>Paixão:</strong> Somos apaixonados por tecnologia e por ajudar
          os outros.
        </p>
        <h1 className="text-2xl font-semibold">O que oferecemos</h1>
        <p className="text-lg lg:text-xl text-justify text-gray-700 mb-8">
          <strong>Café delicioso::</strong> Usamos grãos de café de alta
          qualidade e oferecemos uma variedade de bebidas para todos os gostos.{" "}
          <br />
          <strong>Ambiente acolhedor::</strong> Nosso espaço é projetado para
          ser confortável e convidativo, com Wi-Fi gratuito e mesas para
          trabalhar ou socializar. <br />
          <strong>Eventos e workshops:</strong> Realizamos regularmente eventos
          e workshops para promover a comunidade e o aprendizado.
          <br />
          <strong>Espaço para co-working:</strong> Oferecemos um espaço de
          co-working para programadores que desejam trabalhar em um ambiente
          colaborativo.
        </p>
        <h1 className="text-2xl font-semibold">Venha nos conhecer!</h1>
        <p className="text-lg lg:text-xl text-justify text-gray-700 mb-8">
          O Café Bugado está aberto a todos os programadores, desenvolvedores e
          entusiastas da tecnologia. Convidamos você a nos conhecer e fazer
          parte da nossa comunidade.
        </p>
        <h1 className="text-2xl font-semibold">#SomosTodosBugados</h1>
        <Link to="/">
          <Button
            onClick={handleClick}
            style="bg-amber-950 w-fit text-xl px-2 font-bold text-lime-50"
          >
            VOLTAR PARA O ÍNICIO
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
