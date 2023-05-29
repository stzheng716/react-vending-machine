import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Soda() {
    return (
        <div>
            <img
                src="https://media.istockphoto.com/id/1062831310/photo/pour-soft-drink-in-glass-with-ice-splash-on-dark-background.jpg?s=612x612&w=0&k=20&c=XlLTcFQ0FqcTWRa9QniHgpjlkdFrOJGJFGm5jg_TAAw="
                alt="soda"
            />
            <button>drink Soda</button>
            <button>
                <Link to="/">
                    Go home
                </Link>
            </button>
        </div>
    )
}

export default Soda