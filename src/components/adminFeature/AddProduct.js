import React, { useState } from "react";
import classnames from "classnames";

import { storage } from "../../firebase/index";

const AddProduct = () => {
    const [imgs, setimgs] = useState(null);
    const [tempUrl, settempUrl] = useState("");
    const [progressLoadImg, setprogressLoadImg] = useState(0);
    const [badge, setbadge] = useState();
    const [currentOnFocus, setcurrentOnFocus] = useState(-1);
    
   const [titles, settitles] = useState([
    { name: "Tên sản phẩm", badge: "Tên SP", status: "" },
    { name: "Giá Bán", badge: "Giá", status: "" },
    { name: "Xuất xứ", badge: "Xuất xứ", status: "" },
    { name: "Chiết khấu (Từ 0.0 đến 1.0)", badge: "Chiết khấu", status: "" },
    { name: "Chất liệu", badge: "Chất liệu", status: "" },
    { name: "Thuế (Từ 0.0 đến 1.0)", badge: "thuế", status: "" },
])
   
    // const titles = [
    //     { name: "Tên sản phẩm", badge: "Tên SP", },
    //     { name: "Giá Bán", badge: "Giá", },
    //     { name: "Xuất xứ", badge: "Xuất xứ", },
    //     { name: "Chiết khấu (Từ 0.0 đến 1.0)", badge: "Chiết khấu", },
    //     { name: "Chất liệu", badge: "Chất liệu", },
    //     { name: "Thuế (Từ 0.0 đến 1.0)", badge: "thuế", },
    // ];

    const isCorrectIndex = (index) => {
        const lengthOfStr = titles[index].status.length;
        return lengthOfStr !== 0 ? false : true;     
    };
   
    const setTempState = (event, index) => {
        const str = event.target.value;
        
        let tempObject = [...titles]
        tempObject[index] = {...tempObject[index], status: str}
      
        settitles(tempObject)
    }
  
  

    const setCurrentOnFocus = (index) => {
        setcurrentOnFocus(index);
    };

    const titlesMap = titles.map((title, index) => {
        
        return (
            <div className="form-group col-lg-6 add-product-right-txt-container" key={index}>
                <input
                    type="text"
                    className="add-product-right-txt-input"
                    placeholder={title.name}
                    onChange={(event) => {
                        setTempState(event, index);
                        isCorrectIndex(index);
                    }}
                    onClick={() => setCurrentOnFocus(index)}
                />

                <span
                    className={classnames(
                        "badge badge-secondary add-product-right-txt-badge badge-info",
                        {
                            "d-none": isCorrectIndex(index),
                        }
                    )}
                >
                    {" "}
                    {title.badge}{" "}
                </span>
            </div>
        );
    });

    const loading = () => {
        return progressLoadImg !== 0 || progressLoadImg !== 100 ? false : true;
    };

    const inputHandle = (event) => {
        const imgs = event.target.files; //1 file
        if (imgs) {
            let arr = [...imgs];
            setimgs(arr);
        }
    };

    const uploadImgHandle = () => {
        imgs.forEach((el) => {
            const uploadTask = storage.ref(`images/${el.name}`).put(el);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    console.log(progress);
                    setprogressLoadImg(progress);
                },
                (err) => {
                    console.log(err);
                },
                () => {
                    storage
                        .ref(`images`)
                        .child(el.name)
                        .getDownloadURL()
                        .then((url) => {
                            settempUrl(url);
                        });
                }
            );
        });
    };
    /**
     *
     */

    return (
        <div>
            <p className="add-product-header">Thêm sản phẩm mới</p>
            <div className="row">
                <div className="col-lg-4">
                    <div className="add-product-left-container">
                        {loading() && <progress value={progressLoadImg} max={100} />}
                        <div>
                            <img
                                src={
                                    tempUrl ||
                                    "http://via.placeholder.com/300?text=Vui lòng tải ảnh"
                                }
                                alt="image"
                                className="add-product-left-img"
                            />
                        </div>
                        <div className="form-group ">
                            <label htmlFor=""></label>
                            <input
                                type="file"
                                className="form-control-file"
                                multiple
                                onChange={inputHandle}
                            />
                        </div>
                        <button className="btn btn-dark" onClick={uploadImgHandle}>
                            Đăng tải
                        </button>
                    </div>
                </div>

                <div className="col-lg-8 add-product-right">
                    <div className="row">{titlesMap}</div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
