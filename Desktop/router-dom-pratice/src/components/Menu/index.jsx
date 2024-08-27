import { Link } from "react-router-dom";
import './styles.css';

export const Menu = () =>{
    return (
        <ul className="navigator">
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/posts'>
                <li>Posts</li>
            </Link>
            <Link to='/redirect'>
                <li>Redirect</li>
            </Link>
            <Link to='/about'>
                <li>Sobre</li>
            </Link>
        </ul>
    )
}