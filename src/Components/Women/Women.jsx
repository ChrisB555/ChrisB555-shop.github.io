import WomenCarousel from "./WomenCarousel";
import Header from "../Header";
import FooterWrapper from "../FooterWrapper";
import WomenNav from "./WomenNav";
import WomenProdCarousel from "./WomenProdCarousel";

const Women = () => {
  return (
    <div>
      <Header />
      <WomenNav />
      <WomenProdCarousel />
      <WomenCarousel />
      <FooterWrapper />
    </div>
  );
};

export default Women;
