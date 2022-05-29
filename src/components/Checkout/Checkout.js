import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BookingModal from "../BookingModal/BookingModal";

const Checkout = () => {
  const [user] = useAuthState(auth);
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    fetch(`https://sheltered-reaches-94417.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  return (
    <div className="container mt-5">
      <h2 className="text-primary text-center">CHECKOUT</h2>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={product?.image} alt="" />
          </div>
          <div className="col-6 ps-5 m-5">
            <h2>Name: {product?.name?.toUpperCase()}</h2>
            <h3>Price: ${product?.price}</h3>
            <h3>Available: {product?.available} pieces</h3>
            <h3>Minimum Order: {product?.minimumOrder} pieces</h3>
            <p className="fs-5">{product?.description}</p>
            <button
              className="btn btn-lg btn-primary"
              onClick={() => setModalShow(true)}
            >
              ORDER
            </button>
          </div>
        </div>
      </div>
      <BookingModal
        show={modalShow}
        user={user}
        product={product}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default Checkout;
