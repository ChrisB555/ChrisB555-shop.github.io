import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const WomenProdCarousel = () => {
  const responsive = {
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
        Products:{" "}
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
              src="womenprod2.jpeg"
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
              src="womenprod5.jpeg"
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
              src="womenprod3.jpeg"
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
              src="womenprod4.jpeg"
              alt="First slide"
              style={{ width: "200px", heigh: "200px" }}
            />{" "}
            <p className="carousel-text">Skirts</p>
          </div>
        </Link>
        <Link to="./Products">
          {" "}
          <div>
            {" "}
            <img
              className="carousel-img"
              src="womenprod1.jpeg"
              alt="First slide"
              style={{ width: "200px", heigh: "200px" }}
            />{" "}
            <p className="carousel-text">Blouses</p>
          </div>
        </Link>
        <Link to="./Products">
          {" "}
          <div>
            {" "}
            <img
              className="carousel-img"
              src="womenprod6.jpeg"
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
              src="womenprod7.jpeg"
              alt="First slide"
              style={{ width: "200px", heigh: "200px" }}
            />{" "}
            <p className="carousel-text">Blasers</p>
          </div>
        </Link>
      </Carousel>
    </div>
  );
};
export default WomenProdCarousel;
