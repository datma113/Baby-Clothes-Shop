import React from "react";

import {useDispatch} from 'react-redux'

import {changeAdminPage} from '../../redux/actions/actAdmin'

const Card = ({ sign, title, icon, bgColor, color, index }) => {

     const dispatch = useDispatch()

     const changeAdminPageHandling = (index) => {
          dispatch(changeAdminPage(index))

     }
    return (
        <div className={`admin-cards bg-${bgColor} text-${color} mb-2`}>
            <div className="row">
                <div className="col-8">
                    <h1 className="admin-cards-sign"> {sign} </h1>
                    <p className="admin-cards-title"> {title} </p>
                </div>
                <div className="col-4 admin-cards-icon d-flex justify-content-start align-items-center">
                    <i className={icon}></i>
                </div>
            </div>
            <div className="admin-cards-more-info text-light d-flex justify-content-center align-items-center"
               onClick={ () => changeAdminPageHandling(index)}
            >
                Chọn&nbsp;
                <i className="fas fa-arrow-circle-right"></i>
            </div>
        </div>
    );
};

export default Card;
