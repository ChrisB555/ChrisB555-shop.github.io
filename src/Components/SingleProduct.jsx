import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../Context/Context";
import { withRouter } from "react-router";

const SingleProduct = ({ prod, history }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const handleNavigate = () => {
    dispatch({ type: "SELECT_PRODUCT", payload: { id: prod.id } });
    history.push(`/Products/${prod.id}`);
  };
  return (
    <div className="products">
      <Card>
        <Card.Img
          variant="top"
          src={prod.image}
          alt={prod.name}
          onClick={handleNavigate}
        />

        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>{prod.price.split(".")[0]} Euro</span>
            {prod.fastDelivery ? (
              <div>Fast delivery </div>
            ) : (
              <div>5 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
              variant="danger"
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
              disabled={!prod.inStock}
              variant="secondary"
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};
export default withRouter(SingleProduct);
