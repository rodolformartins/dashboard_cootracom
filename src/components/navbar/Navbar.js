import './Navbar.css';
import avatar from '../../assets/logo.jpg';

const Navbar = ({ sidebarOpen, openSidebar}) => {
    return (
        <nav className="navbar"> 
        <div className ="nav_icon" onClick={() => openSidebar()}>
            <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left"> 
            <a href="#">Produtos</a>
            <a href="#">Usuários</a>
            <a href="#" className="active__link">Admin</a>
            </div>

            <div className="navbar__right">
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#">
                    <i className="fa fa-search"></i>
                </a>

                <a href="#">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )

}

export default Navbar;