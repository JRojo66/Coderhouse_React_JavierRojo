import { Link } from "react-router-dom";

const LogoRojozon = ({ tamano }) => {
  return (
    <Link to={"/"}>
      <img src={"https://i.ibb.co/Lxynx7n/logo-Rojozon.png"} alt="Rojozon" width={tamano} />
    </Link>
  );
};

export default LogoRojozon;
