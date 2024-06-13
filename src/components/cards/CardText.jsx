import cardStyle from "./Card.module.css";
const CardText = () => {
    return (
        <div>
            <h4 className={cardStyle.title}><strong>IL GOAT LEO MESSI</strong></h4>
            <p className={cardStyle.text}>
                Messi il giocatore piu forte del mondo? esiste ancora qualcuno che preferisce ronaldo non credo proprio amici lui è la capra in persona e ne abbiamo le prove, ecco uno scatto che afferma che Leo Messi è il G.O.A.T
            </p>
            <button className={cardStyle.button} >Leggi di piu</button>

        </div>
    );
}

export default CardText;