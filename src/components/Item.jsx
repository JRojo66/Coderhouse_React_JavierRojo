import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <Link to={"/item/" + producto.id}>
              <img src={producto.img} className="card-img-top w-100" alt={producto.title}/>
            </Link>
          </div>
          <div className="col-md-6">
            <p className="card-text w-100">{producto.title}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
