import React from "react";
import { useParams } from "react-router-dom";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Soda from "./Soda";
import VendingMachine from "./VendingMachine";

/** Snack component that renders a component depending on the url paramas */
function Snack() {
    const snack = useParams();

    if (snack.snack === "soda") {
        return <Soda />
    } else if (snack.snack === "chips") {
        return <Chips />
    } else if (snack.snack === "sardines") {
        return <Sardines />
    }

    return (
        <VendingMachine />
    )
}

export default Snack