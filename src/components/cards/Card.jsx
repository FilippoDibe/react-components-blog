import cardStyle from "./Card.module.css";
import CardText from "./CardText";
import CardImg from "./CardImg";
const Card = () => {
    return(
        <div className={cardStyle.container}>
            <CardImg/>
            <CardText/>

        </div>
    );
};

export default Card;