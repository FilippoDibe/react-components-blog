import "./Main.css";
import CardComponent from '../cards/Card';
import Footer from "../Footer/Footer";
const Main = () => {
    return (
        <main className="background">
            <div className="container">
                <h1 className="title">Il Mio Blog</h1>
                <CardComponent/>
                <Footer/>
            </div>

        </main>
            
    );
       
};

export default Main;