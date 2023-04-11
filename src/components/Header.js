import React from "react";
import world from "../images/world.png"

export default function Header() {
    return (
        <header>
            <img src={world} alt="world" width="30px" />
            <h1>tyler's travel journal.</h1>
        </header>
    )
}