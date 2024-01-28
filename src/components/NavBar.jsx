import rojozonLogo from "../assets/logoRojozon.png"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src={rojozonLogo} className="navbar-brand logo" alt="amazon" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" aria-disabled="true" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Rojozon basics</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Books </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Novels</a></li>
                                        <li><a className="dropdown-item" href="#">Tecnology</a></li>
                                        <li className="dropdown-divider"></li>
                                        <li><a className="dropdown-item" href="#">Screenplay novels</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Log-in</a>
                                </li>
                            <div>
                                <li className="mx-5">  
                                    <CartWidget/>
                                </li>
                                </div>     
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;