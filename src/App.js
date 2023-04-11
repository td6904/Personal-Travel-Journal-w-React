import React from "react";
import Header from "./components/Header";
import Destination from "./components/Destination";
import data from "./data.js";

export default function App() {
  const cardData = data.map((item) => {
    return <Destination {...item} />;
  })
  return <div>
    <Header />
    <div>{cardData}</div>
  </div>;
}
