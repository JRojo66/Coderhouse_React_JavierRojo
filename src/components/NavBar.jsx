import { NavLink } from "react-router-dom";
import rojozonLogo from "../assets/logoRojozon.png"
import CartWidget from "./CartWidget";
import LogoRojozon from "./logoRojozon";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <LogoRojozon tamano={200}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse display-6 mx-5" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" aria-disabled="true" to={"/"}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"category/electronics"}>Electronics</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"category/books"}>Books</NavLink>
                                </li>                                
                                <li className="nav-item">
                                    <NavLink className="nav-link disabled" aria-disabled="true">Log-in</NavLink>
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