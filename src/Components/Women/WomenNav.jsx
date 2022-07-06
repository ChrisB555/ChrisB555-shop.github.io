const WomenNav = () => {
  return (
    <div className="woman">
      <h3
        style={{
          marginTop: "20px",
          marginLeft: "100px",
          fontWeight: "bold",
          color: "darkslategray",
        }}
      >
        Women
      </h3>
      <ul className="women-nav">
        <li>Clothing</li>
        <li>Large Sizing</li>
        <li>Maternity Wear</li>
        <li>Accesories & Shoes</li>
      </ul>
      <img
        className="d-block w-90 "
        style={{ margin: "10px auto" }}
        src="women1.webp"
        alt="women1"
      />
    </div>
  );
};
export default WomenNav;
