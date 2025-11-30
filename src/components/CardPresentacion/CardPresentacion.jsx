import { useState } from "react";
import "../CardPresentacion/CardPresentacion.css";


const CardPresentacion = ({textCardP, tituloP, children}) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
    setClicked(!clicked);
            
    };

    return (
        <>
        <section className="cardPresentacion">
            <div>
                <h1>{tituloP}</h1>
                <p>{textCardP}</p>
            </div>
            <div className="contenedorCardPresentacion">{children}</div>
        </section>
        </>
    )
};
export default CardPresentacion;