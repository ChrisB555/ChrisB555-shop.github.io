import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const WomenCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="carousel">
      <h5
        style={{ margin: "30px", fontWeight: "bold", color: "darkslategray" }}
      >
        Categories :
      </h5>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        centerMode={true}
        focusOnSelect={true}
        showDots={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Link to="./Products">
          <div>
            <img
              className="carousel-img"
              src="jeans.webp"
              alt="First slide"
              style={{ width: "200px", heigh: "200px" }}
            />
            <p className="carousel-text">Jeans</p>
          </div>
        </Link>
        <Link to="./Products">
          {" "}
          <div>
            {" "}
            <img
              className="carousel-img"
              src="hoodies.webp"
              alt="First slide"
              style={{ width: "200px", heigh: "200px" }}
            />{" "}
            <p className="carousel-text">Hoodies</p>
          </div>
        </Link>
        <Link to="./Products">
          {" "}
          <div>
            {" "}
            <img
              className="carousel-img"
              src="jacket.webp"
              alt="First slide"
              style={{ width: "200px", heigh: "200px" }}
            />{" "}
            <p className="carousel-text">Jackets</p>
          </div>
        </Link>
        <Link to="./Products">
          {" "}
          <div>
            {" "}
            <img
              className="carousel-img"
              src="neckJumper.webp"
              alt="First slide"
              style={{ width: "200px", heigh: "200px" }}
            />{" "}
            <p className="carousel-text">Jumpers</p>
          </div>
        </Link>
        <Link to="./Products">
          {" "}
          <div>
            {" "}
            <img
              className="carousel-img"
              src="dress.webp"
              alt="First slide"
              style={{ width: "200px", heigh: "200px" }}
            />{" "}
            <p className="carousel-text">Dresses</p>
          </div>
        </Link>
        <Link to="./Products">
          {" "}
          <div>
            {" "}
            <img
              className="carousel-img"
              src="coats.webp"
              alt="First slide"
              style={{ width: "200px", heigh: "200px" }}
            />{" "}
            <p className="carousel-text">Coats</p>
          </div>
        </Link>
        <Link to="./Products">
          {" "}
          <div>
            {" "}
            <img
              className="carousel-img"
              src="trousers.webp"
              alt="First slide"
              style={{ width: "200px", heigh: "200px" }}
            />{" "}
            <p className="carousel-text">Trousers</p>
          </div>
        </Link>
      </Carousel>
    </div>
  );
};
export default WomenCarousel;
