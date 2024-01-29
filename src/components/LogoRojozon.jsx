import { Link } from "react-router-dom";
import Logo from "../assets/logoRojozon.png";

const LogoRojozon = ({tamano}) => {
    return(
        <Link to={"/"}>
            <img src={Logo} alt="Rojozon" width={tamano} />
        </Link>
    )
}
export default LogoRojozon;