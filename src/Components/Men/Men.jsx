import FooterWrapper from "../FooterWrapper";
import Header from "../Header";
import WomenProdCarousel from "../Women/WomenProdCarousel";
import WomenCarousel from "../Women/WomenCarousel";
import MenNav from "./MenNav";

const Men = () => {
  return (
    <div>
      <Header />
      <MenNav />
      <WomenProdCarousel />
      <WomenCarousel />
      <FooterWrapper />
    </div>
  );
};

export default Men;
