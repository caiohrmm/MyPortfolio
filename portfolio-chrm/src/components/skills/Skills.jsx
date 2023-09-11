import Technologies from "./Technologies"
import "./skills.css"

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section_title">
            Minhas habilidades
        </h2>
        <span className="section_subtitle">
            Confira abaixo tudo o que eu aprendi nesses anos de estudo !
        </span>
        <div className="container grid skills_container">
          <Technologies />
          
        </div>
    </section>
  )
}

export default Skills