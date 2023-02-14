import './Sidebar.css';
import logo from '../../assets/logo.jpg'


const Sidebar = ({ sidebarOpen , closeSideBar}) => {
    return (
      <div className={sidebarOpen ? "sidebar-responsive" : ""}  id="sidebar">
        <div className="sidebar__title">
            <div className="sidebar__img">
                <img src={logo} alt="logo"></img>
                <h1>Cootracom Painel</h1>
            </div>

            <i onClick={() => closeSideBar()}
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
            ></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="a">Home</a>
                </div>
                <h2>ADMIN</h2>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="a">Área administrativa</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building"></i>
                    <a href="a">Lojas</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="a">Produtos</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-bars"></i>
                    <a href="a">Categorias</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-cutlery"></i>
                    <a href="a">Pedidos</a>
                </div>
                <h2>PESSOAS</h2>
                <div className="sidebar__link">
                    <i className="fa fa-male"></i>
                    <a href="a">Administradores</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user-circle"></i>
                    <a href="a">Usuários</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="a">Pagamentos e custos</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tasks"></i>
                    <a href="a">A plataforma</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-file-text"></i>
                    <a href="a">Política de privacidade</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="a">Log out</a>
                </div>

            </div>
      </div>
    )
}

export default Sidebar;