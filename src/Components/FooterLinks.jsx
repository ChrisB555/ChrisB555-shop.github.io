const FooterLinks = () => {
  return (
    <div id="footer">
      <div className="footer_links">
        <p>HELP AND INFORMATIONS</p>
        <a className="link" href="#footer">
          Track Order
        </a>
        <a className="link" href="#footer">
          Delivery and Returns
        </a>
        <a className="link" href="#footer">
          Help
        </a>
        <a className="link" href="#footer">
          Fast Delivery
        </a>
      </div>
      <div className="footer_links">
        <p>ABOUT US</p>
        <a className="link" href="#footer">
          About Us
        </a>
        <a className="link" href="#footer">
          Corporate Responsability
        </a>
        <a className="link" href="#footer">
          Investor's Site
        </a>
      </div>
      <div className="footer_links">
        <p>MORE FROM MYSHOP</p>
        <a className="link" href="#footer">
          Mobile and Apps
        </a>
        <a className="link" href="#footer">
          Marketplace
        </a>
        <a className="link" href="#footer">
          E-Gifts Cards
        </a>
      </div>
      <a href="#nav" className="arrow">
        <i className="fas fa-chevron-circle-up"></i>
      </a>
    </div>
  );
};
export default FooterLinks;
