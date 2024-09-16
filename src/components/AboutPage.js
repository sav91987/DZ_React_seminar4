import { Link } from "react-router-dom";

function AboutPage() {
    return ( 
        <div>
            <h1>О нас</h1>
            <p>Страница про нас. Мы крутые!</p>
            <Link to="/">Главная</Link>
        </div>
     );
}

export default AboutPage;