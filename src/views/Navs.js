import './Nav.scss';
import { Link, NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div className="topnav">
            <NavLink activeclassnamenav="active" to="/" exact={true}>Home</NavLink>
            <NavLink activeclassnamenav="active" to="/timer">Countdown</NavLink>
            <NavLink activeclassnamenav="active" to="/todos">Todos</NavLink>
            <NavLink activeclassnamenav="active" to="/blog">Blog</NavLink>
            <NavLink activeclassnamenav="active" to="/seachytb">Youtube</NavLink>
        </div>
    )
}

export default Nav;