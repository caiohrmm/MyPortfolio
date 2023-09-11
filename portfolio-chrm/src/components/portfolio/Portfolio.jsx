import "./portfolio.css"
import Projects from "./Projects"
const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <h2 className="section_title">
            Meus projetos
        </h2>
        <span className="section_subtitle">
            Confira abaixo alguns de meus projetos !
        </span>
        <div className="container grid portfolio_container">
          <Projects />
          
        </div>
    </section>
  )
}

export default Portfolio