import { Link } from "react-router-dom";

function HomePage() {
    return ( 
        <div>
            <h1>Главная страница</h1>
            <p>Это домашняя страница.</p>
            <Link to="/about">О Нас</Link>
        </div>
     );
}

export default HomePage;