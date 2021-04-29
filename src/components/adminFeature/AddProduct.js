import React, { useState } from "react";

import { storage } from "../../firebase/index";

const AddProduct = () => {
    const [imgs, setimgs] = useState(null);
    const [tempUrl, settempUrl] = useState("");
    const [progressLoadImg, setprogressLoadImg] = useState(0);
    
    const loading = () => {
        return progressLoadImg !== 0 || progressLoadImg !== 100 ? false : true;
    }

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
    console.log(progressLoadImg !==0)
    return (
        <div>
            <p className="add-product-header">Thêm sản phẩm mới</p>
            <div className="row">
                <div className="col-lg-4">
                    <div className="add-product-left-container">
                       {(loading()) && <progress value={progressLoadImg} max={100}/>}
                        <div>
                            <img src={tempUrl || "http://via.placeholder.com/300?text=Vui lòng tải ảnh" }  alt="image" className="add-product-left-img"/>
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
                <div className="col-lg-8">

                </div>
            </div>
        </div>
    );
};

export default AddProduct;
