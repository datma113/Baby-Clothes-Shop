import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {setActiveStatus} from '../../redux/actions/actAdmin'

const Up_ActiveStatus = ({ active }) => {
     const dispatch = useDispatch()
    const [isChecked, setisChecked] = useState(false);

    useEffect(() => {
        setisChecked(active);
    }, [active])
    

    const checkStatus = () => {
        const currentStatus = !isChecked
        setisChecked(currentStatus);
        dispatch(setActiveStatus(currentStatus))
        
    };
    return (
        <div className="mb-5">
            <div className="form-check  text-danger checkbox-xl d-flex">
                <label
                    className="form-check-label"
                    style={{ userSelect: `none` }}
                    onClick={() => checkStatus()}
                    htmlFor="#test"
                >
                    <input
                        type="checkbox"
                        className="form-check-input checkbox-active"
                        style={{ height: `2rem` }}
                        checked={!isChecked}
                        value="checkedValue"
                        id="test"
                    />
                    &nbsp; Ngừng Kinh doanh sản phẩm này
                </label>
            </div>
        </div>
    );
};

export default Up_ActiveStatus;
