 import cardStyle from'./Card.module.css';
import pic from '../../assets/img/images.jpeg';
const CardImg = () => {
    return (
       <figure className={cardStyle.imgContain}>
            <img src={pic} alt="" />
       </figure>
    );
}

export default CardImg;