import React from "react";
import { Link, useNavigate } from "react-router-dom";


/** renders chips component with button to go home*/
function Chips() {
    return (
        <div>
            <img
                src="https://m.media-amazon.com/images/I/813axPlVxBL.jpg"
                alt="bags of chips"
            />
            <button>
                <Link to="/">
                    Go home
                </Link>
            </button>
        </div>
    )
}

export default Chips