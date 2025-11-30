import { useState } from "react";
import "../Card/Card.css";
import Button from "../Button/Button";

const Card = ({ textCard, titulo, texBtn, children, btnLink }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <section className="card">

        <div className="card-text">
          <h1>{titulo}</h1>
          <p>{textCard}</p>

          {clicked && (
            <p className="extra-text">
              rem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s...
            </p>
          )}
        </div>

        <div className="card-button">
          {btnLink ? (
            // Si hay link, el botón abre el link
            <a href={btnLink} target="_blank" rel="noopener noreferrer">
              <Button text={texBtn} />
            </a>
          ) : (
            // Si NO hay link, el botón expande/colapsa
            <Button text={texBtn} onClick={handleClick} />
          )}
        </div>

        {children}

      </section>
    </>
  );
};

export default Card;
