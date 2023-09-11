import ApiSpring from "../../../assets/APISpringBoot.png";
import ProjetoThoughts from "../../../assets/projetothoughts.png";
import ProjetoGetaPet from "../../../assets/ProjetoGetAPet.png";



const Projects = () => {
  return (
    <>
      <div className="portfolio_box">
        <div className="portfolio_title">
          <div className="portfolio_image">
            <img src={ProjetoThoughts} alt="projetothoughts" />
          </div>
          <h3>Projeto Thoughts</h3>
        </div>
        <p className="portfolio_description">
          O projeto Thoughts é um marco inicial em minha jornada de
          desenvolvimento. Utilizando Node.js e a eficiente estrutura
          Express.js, criei um servidor web que integra perfeitamente com um
          banco de dados MySQL, tudo isso orquestrado com a ajuda da ORM
          Sequelize. Embora não seja uma API RESTful, o Thoughts é uma prova
          viva de como as ideias podem tomar forma na web. Este projeto simples,
          porém impactante, demonstra minha capacidade de criar soluções
          práticas e funcionais desde os primeiros passos na programação.
        </p>
        <div className="portfolio_social">
          <a href="">
            <i className="portfolio_icon uil uil-github-alt"></i> GitHub
          </a>
        </div>
      </div>
      <div className="portfolio_box">
        <div className="portfolio_title">
          <div className="portfolio_image">
            <img src={ProjetoGetaPet} alt="projetogetapet" />
          </div>
          <h3>Projeto Get a Pet</h3>
        </div>
        <p className="portfolio_description">
          O Get a Pet marca minha evolução no desenvolvimento, destacando minhas
          habilidades no backend com Node.js e Express.js, onde criei uma API
          RESTful robusta com validações, tratamento de erros e respostas
          precisas. Minha capacidade de integrar o MongoDB por meio do Mongoose
          demonstra minha habilidade em desenvolver sistemas confiáveis. Além
          disso, o frontend dinâmico em ReactJS proporciona uma experiência
          completa para os usuários, refletindo meu compromisso com a excelência
          em funcionalidade e design.
        </p>
        <div className="portfolio_social">
          <a href="">
            <i className="portfolio_icon uil uil-github-alt"></i> GitHub
          </a>
        </div>
      </div>
      <div className="portfolio_box">
        <div className="portfolio_title">
          <div className="portfolio_image">
            <img src={ApiSpring} alt="apispringboot" />
          </div>
          <h3>API RESTful - Spring Boot</h3>
        </div>
        <p className="portfolio_description">
          Minha última criação é uma API RESTful com Spring Boot e MySQL. Para
          garantir a integridade e a rastreabilidade do banco de dados,
          implementei migrações usando Flyway. Desenvolvi rigorosos testes
          unitários e de integração, assegurando eficiência e confiabilidade da aplicação.
          Esta API é a escolha certa para soluções de alto desempenho e qualidade de software. Com este
          projeto tenho certeza que estou pronto para enfrentar os desafios mais complexos e fornecer
          soluções robustas aos meus próximos projetos.
        </p>
        <div className="portfolio_social">
          <a href="">
            <i className="portfolio_icon uil uil-github-alt"></i> GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
