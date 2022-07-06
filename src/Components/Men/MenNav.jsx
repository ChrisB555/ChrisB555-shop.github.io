const MenNav = () => {
  return (
    <div>
      <h3
        style={{
          marginTop: "20px",
          marginLeft: "100px",
          fontWeight: "bold",
          color: "darkslategray",
        }}
      >
        Men
      </h3>
      <ul className="women-nav">
        <li>Clothing</li>
        <li>Large Sizing</li>

        <li>Accesories & Shoes</li>
      </ul>
      <img
        className="d-block w-90 "
        style={{ margin: "10px auto" }}
        src="men1.webp"
        alt="men1"
      />
    </div>
  );
};
export default MenNav;
