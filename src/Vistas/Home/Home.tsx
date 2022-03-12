import './styles.scss';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    function irAlCajero() {
        navigate("/login");
    }
    return (
        <>
            <div className='home'>
                <h1>Bienvenido a la app de cajero de codiGo</h1>
                <h2>Realiza todas tus operaciones de manera segura</h2>
                <button onClick={() => irAlCajero()} >Ir al cajero</button>
            </div>
        </>
    );
}

export default Home;

