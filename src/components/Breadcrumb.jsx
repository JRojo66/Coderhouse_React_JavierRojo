import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Breadcrumb = ({page}) =>{
    const [pagina1, setPagina] = useState("");
    
    useEffect(() => {
        setPagina(page);
    },[page]);

    return(
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb fs-3">
                <li className="breadcrumb-item"><Link to = {"/"}>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{pagina1}</li>
            </ol>
        </nav>
    )
}
export default Breadcrumb;