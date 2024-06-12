import cardStyle from "./Card.module.css";
const CardText = () => {
    return (
        <div>
            <h4 className={cardStyle.title}><strong>TITOLO</strong></h4>
            <p className={cardStyle.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore molestias quam earum culpa expedita ea consectetur, vitae reiciendis adipisci eligendi magnam nostrum aut nulla tempore neque excepturi fugit reprehenderit!
            </p>
            <button className={cardStyle.button} >Warning</button>

        </div>
    );
}

export default CardText;