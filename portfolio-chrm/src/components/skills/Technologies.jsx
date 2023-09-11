const Technologies = () => {
  return (
    <>
      <div className="skills_box">
        <div className="skills_title">
          <div className="skills_icon">
            <i className="bx bxl-java"></i>
          </div>
          <h3>Java</h3>
        </div>
        <p className="skills_description">
          Minha aventura no mundo da programação começou na faculdade com Java,
          e desde então, fiquei fascinado pela elegância da orientação a
          objetos. O Java me proporcionou uma base sólida em POO, e minha paixão
          me levou a buscar conhecimento aprofundado por meio de cursos e
          práticas constantes.
        </p>
      </div>
      <div className="skills_box">
        <div className="skills_title">
          <div className="skills_icon">
            <i className="bx bxl-javascript"></i>
          </div>
          <h3>JavaScript</h3>
        </div>
        <p className="skills_description">
          Minha porta de entrada no mundo da web, com ele desenvolvi habilidades
          sólidas de lógica de programação. Aprendi a dar vida a ideias na web,
          criando interações dinâmicas e envolventes. Além disso, domino o
          ReactJS, o que me permite criar componentes reutilizáveis e interfaces
          modernas e responsivas para aplicativos web.
        </p>
      </div>
      <div className="skills_box">
        <div className="skills_title">
          <div className="skills_icon">
            <i className="bx bxl-spring-boot"></i>
          </div>
          <h3>Spring Boot</h3>
        </div>
        <p className="skills_description">
          Sou capaz de desenvolver APIs RESTful de alto desempenho que aderem
          rigorosamente aos princípios de glória do REST. Minha experiência
          inclui a criação de APIs robustas, completas, contando com testes
          abrangentes e documentação Swagger, garantindo sempre a qualidade do
          código.
        </p>
      </div>
      <div className="skills_box">
        <div className="skills_title">
          <div className="skills_icon">
            <i className="bx bxl-nodejs"></i>
          </div>
          <h3>NodeJS</h3>
        </div>
        <p className="skills_description">
          Sou capaz de criar APIs RESTful altamente escaláveis e de alto
          desempenho. Minha experiência se concentra em desenvolver aplicativos
          que atendem aos rigorosos padrões da indústria em termos de desempenho
          e confiabilidade. Tenho domínio sobre o framework Express, uma mão na
          roda para lidar com servidores Web.
        </p>
      </div>

      <div className="skills_box">
        <div className="skills_title">
          <div className="skills_icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-database"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
          </div>
          <h3>Banco de dados</h3>
        </div>
        <p className="skills_description">
          Tenho amplo conhecimento com os bancos de dados MongoDB e MySQL.
          Experiência com ORMs como Prisma, Sequelize, Mongoose e Hibernate.
          Isso me permite projetar e otimizar bancos de dados para garantir
          eficiência e escalabilidade, contribuindo para o sucesso de projetos
          modernos.
        </p>
      </div>
      <div className="skills_box">
        <div className="skills_title">
          <div className="skills_icon">
            <i className="bx bxl-git"></i>
          </div>
          <h3>Git</h3>
        </div>
        <p className="skills_description">
          Proficiente em usar o Git para versionar código, essencial para o
          desenvolvimento colaborativo e o controle de alterações em projetos.
          Minha experiência com o Git facilita o acompanhamento eficaz do
          progresso do código, promovendo a colaboração e o rastreamento de
          alterações ao longo do tempo.
        </p>
      </div>
    </>
  );
};

export default Technologies;
