import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyCarousel = () => {
  return (
    <>
      <div
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          padding: 30,
          margin: "10px auto ",
        }}
      >
        <Carousel className="my_carousel">
          <Carousel.Item>
            <Link to="./Women">
              <img
                className="d-block w-100"
                src="carousel-women1.webp"
                alt="First slide"
              />
            </Link>
            <Carousel.Caption>
              <h1 style={{ marginBottom: "180px", fontSize: "50px" }}>
                Shop Woman
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="./Men">
              <img
                className="d-block w-100 "
                src="carousel-women2.webp"
                alt="Second slide"
              />
            </Link>
            <Carousel.Caption>
              <h1 style={{ marginBottom: "180px", fontSize: "50px" }}>
                Shop Man
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="./Kids">
              {" "}
              <img
                className="d-block w-100 "
                src="carousel-women3.webp"
                alt="Third slide"
              />
            </Link>
            <Carousel.Caption>
              <h1 style={{ marginBottom: "180px", fontSize: "50px" }}>
                Shop Kids
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="./Babies">
              {" "}
              <img
                className="d-block w-100 "
                src="carousel-women4.webp"
                alt="Third slide"
              />
            </Link>
            <Carousel.Caption>
              <h1 style={{ marginBottom: "180px", fontSize: "50px" }}>
                Shop Babies
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default MyCarousel;
