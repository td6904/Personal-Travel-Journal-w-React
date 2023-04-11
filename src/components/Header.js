import React from "react";
import world from "../images/world.png";

export default function Header() {
  return (
    <header>
      <h1>
        <img src={world} alt="world" width="30px" />
        tyler's travel journal.
      </h1>
    </header>
  );
}
