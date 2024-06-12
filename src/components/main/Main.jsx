import "./Main.css";
import CardComponent from '../cards/Card';
const Main = () => {
    return (
        <main className="background">
            <div className="container">
                <h1 className="title">Il Mio Blog</h1>
                <CardComponent/>
            </div>

        </main>
            
    );
       
};

export default Main;