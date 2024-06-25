import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, me chamo <span className="purple">Matheus Hentges </span>
            from <span className="purple"> Chapecó, Brasil.</span>
            <br />
            Sou desenvolvedor freelancer há 1 ano.
            <br />
            Sou formado em análise e desenvolvimento de sistemas
            <br />
            <br />
            Entusiasmado e apaixonado pelo mundo da tecnologia!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Estudando programação
            </li>
            <li className="about-activity">
              <ImPointRight /> Lendo livros
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajando
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A única maneira de fazer algo excelente é amar o que você faz. Se você ainda não a encontrou, continue procurando. Não se acomode"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
