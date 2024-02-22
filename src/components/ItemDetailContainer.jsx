import { useState, useEffect } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import { getOneDocument } from "../services/firebase";
// import Loading from "./loading";
import Breadcrumb from "./Breadcrumb";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const datadoc = getOneDocument(id, "items").then((res) => setItem(res));
    setLoading(false);
  }, []);

  return (
    <>
      <div className="row">
        <div className="col ">
          <Breadcrumb page={item.title} clase={"breadcrumb fs-5"} />
        </div>
      </div>
      {loading ? ""/*<Loading />*/ : <ItemDetail item={item} />}
    </>
  );
};

export default ItemDetailContainer;
