import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateIndex } from "../../redux/actions/actProfile";
import classNames from "classnames";

const ProfileLeftComp = () => {
    const dispatch = useDispatch();

    const collapseContent = [
        "Dashboard",
        "Thông tin tài khoản",
        "Hóa đơn",
        "Đổi mật khẩu",
        "Đăng xuất",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const setCurrentIndexWhenClick = (index) => {
        setCurrentIndex(index);
    };

    const isActived = (index) => {
        return index === currentIndex;
    };

    const udpateIndexAPI = (index) => {
        dispatch(updateIndex(index));
    };

    useEffect(() => {
        dispatch(updateIndex(0));

    }, [])

    const collapseContentMap = collapseContent.map((content, index) => {
        return (
            <div
                className="card"
                key={index}
                onClick={() => {
                    setCurrentIndexWhenClick(index);
                    udpateIndexAPI(index);
                }}
            >
                <div
                    className={classNames("card-header", {
                        "is-profile-collapse-active": isActived(index),
                    })}
                >
                    <h5 className="mb-0"> {content} </h5>
                </div>
            </div>
        );
    });

    return <div>{collapseContentMap}</div>;
};

export default ProfileLeftComp;
