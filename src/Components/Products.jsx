import { CartState } from "../Context/Context";
import SingleProduct from "./SingleProduct";
import "./Styles.css";
import Filters from "./Filters";
import FooterWrapper from "./FooterWrapper";
import Header from "./Header";

const Products = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuerry },
  } = CartState();

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }
    if (searchQuerry) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuerry)
      );
    }
    return sortedProducts;
  };
  return (
    <>
      <Header />
      <div className="home">
        <Filters />
        <div className="productContainer">
          {transformProducts().map((prod) => {
            return <SingleProduct prod={prod} key={prod.id} />;
          })}
        </div>
      </div>
      <FooterWrapper />
    </>
  );
};
export default Products;
