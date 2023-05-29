import React from "react";
import { Link, useNavigate } from "react-router-dom";

/** renders Sardines component with button to go home*/

function Sardines() {
    return (
        <div>
            <img
                src="https://previews.123rf.com/images/dashu83/dashu831701/dashu83170100149/70624899-sardine.jpg"
                alt="sardines"
            />
            <button>
                <Link to="/">
                    Go home
                </Link>
            </button>
        </div>
    )
}

export default Sardines