import React from "react";
import { useHistory, useParams } from "react-router";

import OrderHistory from "../auth/OrderHistory";

const Ac_orderOfCustomer = () => {
    const history = useHistory();

    const { id } = useParams();
    const user = {
        customer: {
            id,
        },
    };

    const backPrevious = () => {
        history.push("/admin");
    };
    return (
        <div className="container" style={{ paddingTop: `10rem` }}>
            <div onClick={() => backPrevious()} className="ac-back">
                {" "}
                <i class="fas fa-arrow-left"></i>&nbsp;Quay lại
            </div>
            <div>
                <OrderHistory user={user} />
            </div>
        </div>
    );
};

export default Ac_orderOfCustomer;
