import React from "react";

function GoodsCard({ name, price, img }) {
  return (
    <div style={{ width: "250px", margin: "20px", textAlign: "center" }}>
      <img src={img} alt={name} style={{ width: "150px", height: "150px" }} />
      <h3 style={{ color: "#03a9f4", marginTop: "10px" }}>{name}</h3>
      <p style={{ fontSize: "18px" }}>Ціна: {price} грн</p>
    </div>
  );
}

function Goods() {
  const fruits = [
    {
      name: "Полуниця",
      price: 15,
      img: "https://cdn-icons-png.flaticon.com/512/590/590685.png"
    },
    {
      name: "Банан",
      price: 20,
      img: "https://cdn-icons-png.flaticon.com/512/590/590682.png"
    },
    {
      name: "Виноград",
      price: 25,
      img: "https://cdn-icons-png.flaticon.com/512/590/590684.png"
    },
    {
      name: "Кавун",
      price: 18,
      img: "https://cdn-icons-png.flaticon.com/512/590/590683.png"
    }
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Базар</h1>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {fruits.map((f, i) => (
          <GoodsCard key={i} name={f.name} price={f.price} img={f.img} />
        ))}
      </div>
    </div>
  );
}

export default Goods;
