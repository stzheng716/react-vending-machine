import React from "react";
import { Link, useNavigate } from "react-router-dom";

/** Renders VendingMachine components with links to a specific snack */
function VendingMachine() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>This is a Vending Machine. what would you like to eat?</h1>
      <h1>
        <div>
          <Link to="/chips">
            Chips
          </Link>
        </div>
      </h1>
      <h1>
        <div>
          <Link to="/soda">
            soda
          </Link>
        </div>
      </h1>
      <h1>
        <div>
          <Link to="/sardines">
            sardines
          </Link>
        </div>
        <button onClick={() => navigate("/")}>
          Go home
        </button>
      </h1>
    </div>
  )
}

export default VendingMachine